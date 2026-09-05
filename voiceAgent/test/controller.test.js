import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createController, reconcileFinancials } from '../src/controller.js';

const financials = JSON.parse(await readFile(new URL('../data/sample-financials.json', import.meta.url), 'utf8'));

function fakeClient(result) {
  const calls = [];
  return {
    calls,
    responses: {
      async create(body, options) {
        calls.push({ body: structuredClone(body), options });
        if (result instanceof Error) throw result;
        if (typeof result === 'function') return result(body, options);
        return { status: 'completed', output_text: JSON.stringify(result) };
      },
    },
  };
}

test('the actual cash bridge reconciles without double counting context facts', () => {
  const result = reconcileFinancials(financials);
  assert.equal(result.openingCash.amount, 1_200_000);
  assert.equal(result.closingCash.amount, 920_000);
  assert.deepEqual(result.derivedFacts.map((fact) => [fact.sourceId, fact.amount]), [
    ['cash-net-change', -280_000], ['cash-total-inflows', 500_000], ['cash-total-outflows', 780_000],
  ]);
  assert.equal(financials.derivedFacts, undefined, 'validation does not mutate supplied data');
});

test('bad cash totals, duplicate sources, and imprecise amounts fail before an API call', () => {
  const client = fakeClient({});
  const badTotal = structuredClone(financials);
  badTotal.closingCash.amount += 1;
  assert.throws(() => createController({ client, financials: badTotal }), /does not reconcile/);
  const duplicate = structuredClone(financials);
  duplicate.contextFacts[0].sourceId = duplicate.movements[0].sourceId;
  assert.throws(() => reconcileFinancials(duplicate), /Duplicate/);
  const imprecise = structuredClone(financials);
  imprecise.movements[0].amount = 500000.01;
  assert.throws(() => reconcileFinancials(imprecise), /safe integers/);
  assert.equal(client.calls.length, 0);
});

test('the Controller makes its own structured Responses request with validated data and sources', async () => {
  const client = fakeClient({
    status: 'answered',
    answer: 'Cash fell $280,000 to $920,000, with $500,000 of receipts and $780,000 of payments.',
    sourceIds: ['cash-net-change', 'cash-closing', 'cash-total-inflows', 'cash-total-outflows'],
  });
  const controller = createController({ client, financials });
  const signal = new AbortController().signal;
  const history = [{ role: 'user', content: 'We are discussing the August sample.' }];
  const result = await controller.consult({ question: 'Why is cash down?', history, signal });
  assert.equal(result.period, '2026-08');
  assert.equal(result.dataLabel, financials.dataLabel);
  assert.equal(result.status, 'answered');
  const { body, options } = client.calls[0];
  assert.equal(body.store, false);
  assert.equal(body.text.format.type, 'json_schema');
  assert.equal(body.text.format.strict, true);
  assert.match(body.instructions, /not subtract them again/);
  assert.match(body.instructions, /"amount":-280000/);
  assert.deepEqual(JSON.parse(body.input[0].content).conversationContext, history);
  assert.equal(options.signal, signal);
});

test('missing information stays unavailable and needs no invented sources', async () => {
  const client = fakeClient({ status: 'insufficient_data', answer: 'The sample data does not include net income.', sourceIds: [] });
  const result = await createController({ client, financials }).consult({ question: 'What was net income?' });
  assert.equal(result.status, 'insufficient_data');
  assert.deepEqual(result.sourceIds, []);
  assert.match(result.answer, /does not include net income/);
});

test('unknown sources, ungrounded success, and malformed structured responses are rejected', async () => {
  for (const result of [
    { status: 'answered', answer: 'Net income was $900,000.', sourceIds: ['imaginary-income-statement'] },
    { status: 'answered', answer: 'Net income was $900,000.', sourceIds: [] },
    { status: 'answered', answer: '', sourceIds: ['cash-closing'] },
    { status: 'answered', answer: 'An answer.', sourceIds: ['cash-closing'], extra: 'unexpected' },
  ]) {
    await assert.rejects(createController({ client: fakeClient(result), financials }).consult({ question: 'Net income?' }), /invalid answer/);
  }
  const client = fakeClient(() => ({ status: 'completed', output_text: 'not JSON' }));
  await assert.rejects(createController({ client, financials }).consult({ question: 'Cash?' }), /valid structured answer/);
});

test('Controller API failures and aborts propagate without a fabricated result', async () => {
  const failure = new Error('Provider unavailable');
  await assert.rejects(createController({ client: fakeClient(failure), financials }).consult({ question: 'Cash?' }), failure);
  const abort = new AbortController();
  abort.abort();
  const client = fakeClient({});
  await assert.rejects(createController({ client, financials }).consult({ question: 'Cash?', signal: abort.signal }), { name: 'AbortError' });
  assert.equal(client.calls.length, 0);
  const during = new AbortController();
  const duringClient = fakeClient(() => {
    during.abort();
    return { status: 'completed', output_text: JSON.stringify({ status: 'answered', answer: 'Cash is $920,000.', sourceIds: ['cash-closing'] }) };
  });
  await assert.rejects(createController({ client: duringClient, financials }).consult({ question: 'Cash?', signal: during.signal }), { name: 'AbortError' });
});
