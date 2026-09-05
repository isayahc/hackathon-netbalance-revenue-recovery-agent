import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createAgent } from '../src/agent.js';
import { createController } from '../src/controller.js';

const financials = JSON.parse(await readFile(new URL('../data/sample-financials.json', import.meta.url), 'utf8'));
const controllerResult = {
  status: 'answered', answer: financials.contextFacts.find((fact) => fact.sourceId === 'cash-down-explanation').note,
  sourceIds: ['cash-down-explanation', 'receipt-delay', 'planned-receipts', 'planned-closing-cash'], dataLabel: financials.dataLabel, period: financials.period,
};
const toolCall = (id, question = 'Why is cash down?', name = 'consult_controller') => ({
  type: 'function_call', id: `fc_${id}`, call_id: id, name, arguments: JSON.stringify({ question }), status: 'completed',
});
const modelResponse = (output) => ({ status: 'completed', output });
const reply = (text) => modelResponse([{ type: 'message', role: 'assistant', content: [{ type: 'output_text', text, annotations: [] }], status: 'completed' }]);

function queuedClient(queue) {
  const calls = [];
  return {
    calls,
    responses: {
      async create(body, options) {
        calls.push({ body: structuredClone(body), options });
        assert.ok(queue.length, 'Unexpected extra model request');
        const next = queue.shift();
        if (next instanceof Error) throw next;
        return typeof next === 'function' ? next(body, options) : next;
      },
    },
  };
}

test('a CFO request invokes the separate Controller and the next model request receives its actual result', async () => {
  const client = queuedClient([
    modelResponse([toolCall('call_1')]),
    { status: 'completed', output_text: JSON.stringify({ status: controllerResult.status, answer: controllerResult.answer, sourceIds: controllerResult.sourceIds }) },
    reply('In the sample data, cash fell $280,000 to $920,000.'),
  ]);
  const controller = createController({ client, financials });
  const result = await createAgent({ client, controller }).respond({ question: 'Why is cash down this month?' });
  assert.equal(result.replyText, 'Cash is down mainly because collections from a few enterprise customers are running behind. Three accounts explain most of the variance.');
  assert.equal(result.history.at(-1).content[0].text, result.replyText);
  assert.equal(client.calls.length, 3);
  assert.deepEqual(client.calls[0].body.tool_choice, { type: 'function', name: 'consult_controller' });
  assert.equal(client.calls[1].body.text.format.name, 'controller_answer');
  assert.match(client.calls[1].body.instructions, /AI Controller/);
  const output = client.calls[2].body.input.find((item) => item.type === 'function_call_output');
  assert.deepEqual(JSON.parse(output.output), controllerResult);
  assert.equal(output.call_id, 'call_1');
  assert.deepEqual(result.history.map((item) => item.type ?? item.role), ['user', 'function_call', 'function_call_output', 'message']);
  assert.equal(client.calls[0].body.store, false);
});

test('multiple calls and subsequent tool rounds all execute with matching call IDs', async () => {
  const client = queuedClient([
    modelResponse([toolCall('one', 'Cash?'), toolCall('two', 'Equipment?')]),
    modelResponse([toolCall('three', 'Delayed receipts?')]),
    reply('The sample cash balance is $920,000.'),
  ]);
  const questions = [];
  const controller = { async consult(args) { questions.push(args.question); return { ...controllerResult, answer: args.question }; } };
  const result = await createAgent({ client, controller }).respond({ question: 'Explain the cash movements.' });
  assert.deepEqual(questions, ['Cash?', 'Equipment?', 'Delayed receipts?']);
  const outputs = result.history.filter((item) => item.type === 'function_call_output');
  assert.deepEqual(outputs.map((item) => item.call_id), ['one', 'two', 'three']);
  assert.deepEqual(outputs.map((item) => JSON.parse(item.output).answer), questions);
  assert.deepEqual(client.calls[2].body.input.filter((item) => item.type === 'function_call_output').map((item) => item.call_id), ['one', 'two', 'three']);
});

test('follow-up turns preserve complete prior tool cycles without mutating the supplied history', async () => {
  const client = queuedClient([
    modelResponse([toolCall('one')]), reply('Cash fell $280,000.'),
    modelResponse([toolCall('two', 'What was the one-time equipment payment in August?')]), reply('The sample equipment payment was $120,000.'),
  ]);
  const controller = { async consult() { return controllerResult; } };
  const agent = createAgent({ client, controller });
  const first = await agent.respond({ question: 'Why is cash down?' });
  assert.match(first.replyText, /synthetic demo data/);
  assert.match(first.history.at(-1).content[0].text, /synthetic demo data/);
  const saved = structuredClone(first.history);
  const next = await agent.respond({ question: 'What about equipment?', history: first.history });
  assert.deepEqual(first.history, saved);
  assert.deepEqual(next.history.slice(0, saved.length), saved);
  assert.deepEqual(client.calls[2].body.tool_choice, { type: 'function', name: 'consult_controller' });
});

test('unsupported tools and invalid arguments receive errors and never fabricate successful consultations', async () => {
  for (const call of [
    toolCall('bad', 'Send money.', 'send_money'),
    { ...toolCall('bad'), arguments: '{broken json' },
    { ...toolCall('bad'), arguments: JSON.stringify({ question: 'Cash?', extra: 'ignore validation' }) },
    { ...toolCall('bad'), arguments: JSON.stringify({ question: '' }) },
  ]) {
    let consultations = 0;
    const client = queuedClient([modelResponse([call]), reply('It succeeded.')]);
    const agent = createAgent({ client, controller: { async consult() { consultations += 1; return controllerResult; } } });
    await assert.rejects(agent.respond({ question: 'Cash?' }), /without a successful Controller/);
    assert.equal(consultations, 0);
    const output = client.calls[1].body.input.find((item) => item.type === 'function_call_output');
    assert.ok(JSON.parse(output.output).error);
  }
});

test('the tool loop is bounded and model answers cannot bypass the Controller', async () => {
  let consultations = 0;
  const controller = { async consult() { consultations += 1; return controllerResult; } };
  const client = queuedClient([0, 1, 2, 3].map((id) => modelResponse([toolCall(String(id))])));
  await assert.rejects(createAgent({ client, controller }).respond({ question: 'Cash?' }), /consultation limit/);
  assert.equal(consultations, 3);
  await assert.rejects(createAgent({ client: queuedClient([reply('Cash is $10 million.')]), controller }).respond({ question: 'Cash?' }), /without a successful Controller/);
});

test('provider and Controller failures stop the turn without recording invented success', async () => {
  const error = new Error('Controller network failed');
  const client = queuedClient([modelResponse([toolCall('one')])]);
  const agent = createAgent({ client, controller: { async consult() { throw error; } } });
  const history = [{ role: 'user', content: 'Prior question' }];
  await assert.rejects(agent.respond({ question: 'Cash?', history }), error);
  assert.equal(client.calls.length, 1);
  assert.deepEqual(history, [{ role: 'user', content: 'Prior question' }]);
  await assert.rejects(createAgent({ client: queuedClient([new Error('CFO provider failed')]), controller: { consult() {} } }).respond({ question: 'Cash?' }), /CFO provider failed/);
});

test('abort signals reach both model and Controller, and prevent subsequent generation', async () => {
  const abort = new AbortController();
  const client = queuedClient([modelResponse([toolCall('one')])]);
  const agent = createAgent({ client, controller: { async consult({ signal }) { assert.equal(signal, abort.signal); abort.abort(); return controllerResult; } } });
  await assert.rejects(agent.respond({ question: 'Cash?', signal: abort.signal }), { name: 'AbortError' });
  assert.equal(client.calls[0].options.signal, abort.signal);
  assert.equal(client.calls.length, 1);
  const already = queuedClient([]);
  await assert.rejects(createAgent({ client: already, controller: { consult() {} } }).respond({ question: 'Cash?', signal: abort.signal }), { name: 'AbortError' });
  assert.equal(already.calls.length, 0);
});

test('an unavailable-data Controller result is passed to the CFO as unavailable', async () => {
  const missing = { ...controllerResult, status: 'insufficient_data', answer: 'The sample data does not include net income.', sourceIds: [] };
  const client = queuedClient([modelResponse([toolCall('one', 'What was net income?')]), reply(missing.answer)]);
  const result = await createAgent({ client, controller: { async consult() { return missing; } } }).respond({ question: 'What was net income?' });
  const output = client.calls[1].body.input.find((item) => item.type === 'function_call_output');
  assert.equal(JSON.parse(output.output).status, 'insufficient_data');
  assert.match(result.replyText, /does not include net income/);
});

test('speech punctuation and capitalization retain exact demo wording and follow-ups remember what was spoken', async () => {
  const client = queuedClient([
    modelResponse([toolCall('one')]), reply('A model paraphrase that should not be spoken.'),
    modelResponse([toolCall('two', 'Which three enterprise accounts are late?')]), reply('The sample labels are Enterprise Accounts A, B, and C.'),
  ]);
  const seenHistory = [];
  const controller = {
    cashDownReply: controllerResult.answer,
    async consult({ history }) { seenHistory.push(structuredClone(history)); return controllerResult; },
  };
  const agent = createAgent({ client, controller });
  const first = await agent.respond({ question: '  WHY is cash   down this month?!  ' });
  assert.equal(first.replyText, controllerResult.answer);
  const next = await agent.respond({ question: 'Which three accounts?', history: first.history });
  assert.equal(seenHistory[1].at(-1).content[0].text, controllerResult.answer);
  assert.equal(next.replyText, 'The sample labels are Enterprise Accounts A, B, and C.');
  assert.ok(!JSON.stringify(next.history).includes('A model paraphrase'));
});

test('exact demo wording cannot override missing data, failed consultations, or another dataset', async () => {
  const question = 'Why is cash down this month?';
  const unavailable = { ...controllerResult, status: 'insufficient_data', answer: 'The sample data is unavailable.', sourceIds: [] };
  const missingClient = queuedClient([modelResponse([toolCall('missing')]), reply(unavailable.answer)]);
  const missing = await createAgent({ client: missingClient, controller: { cashDownReply: controllerResult.answer, async consult() { return unavailable; } } }).respond({ question });
  assert.equal(missing.replyText, unavailable.answer);

  const failedClient = queuedClient([modelResponse([toolCall('failed')])]);
  await assert.rejects(createAgent({ client: failedClient, controller: { cashDownReply: controllerResult.answer, async consult() { throw new Error('Controller unavailable'); } } }).respond({ question }), /Controller unavailable/);

  const otherClient = queuedClient([modelResponse([toolCall('other')]), reply('The sample data shows a different cause.')]);
  const other = await createAgent({ client: otherClient, controller: { async consult() { return controllerResult; } } }).respond({ question });
  assert.equal(other.replyText, 'The sample data shows a different cause.');
});
