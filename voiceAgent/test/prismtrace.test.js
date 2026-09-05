import test from 'node:test';
import assert from 'node:assert/strict';
import { withPrismTracing } from '../src/prismtrace.js';

const enabledEnv = { PRISMTRACE_API_KEY: 'private-trace-key', PRISMTRACE_PROJECT_ID: 'demo-project' };

test('CFO and Controller calls preserve arguments and results while tracing metadata only', async () => {
  const traces = [];
  const requests = [];
  const result = { output_text: 'PRIVATE GENERATED TRANSCRIPT', status: 'completed' };
  const client = {
    responses: {
      async create(...args) {
        assert.equal(this, client.responses);
        requests.push(args);
        return result;
      },
    },
  };
  const traced = withPrismTracing(client, {
    env: enabledEnv,
    fetchImpl: async (url, options) => { traces.push({ url, options }); return { ok: true }; },
  });
  const options = { signal: new AbortController().signal, headers: { authorization: 'PRIVATE PROVIDER KEY' } };
  for (const role of ['CFO', 'Controller']) {
    const body = {
      model: 'test-model',
      instructions: 'PRIVATE INSTRUCTIONS',
      input: 'PRIVATE CALLER TRANSCRIPT',
      ...(role === 'Controller' ? { text: { format: { name: 'controller_answer' } } } : {}),
    };
    assert.equal(await traced.responses.create(body, options), result);
    assert.equal(requests.at(-1)[0], body);
    assert.equal(requests.at(-1)[1], options);
    const { url, options: traceOptions } = traces.at(-1);
    assert.equal(url, 'https://prism-api-prod.up.railway.app/api/traces');
    assert.equal(traceOptions.method, 'POST');
    assert.equal(traceOptions.headers['X-PRISMtrace-Key'], enabledEnv.PRISMTRACE_API_KEY);
    assert.ok(traceOptions.signal instanceof AbortSignal);
    const payload = JSON.parse(traceOptions.body);
    assert.ok(Number.isInteger(payload.latency_ms) && payload.latency_ms >= 0);
    assert.deepEqual(payload, {
      project_id: 'demo-project',
      model: 'test-model',
      input_messages: [{ role: 'user', content: role }],
      output_message: 'completed',
      latency_ms: payload.latency_ms,
    });
    assert.doesNotMatch(traceOptions.body, /PRIVATE|private-trace-key/);
  }
  assert.equal(traces.length, 2);
});

test('model failures retain the exact error and emit no provider error text', async () => {
  const error = new Error('PRIVATE PROVIDER ERROR with credential');
  const traces = [];
  const client = { responses: { create() { throw error; } } };
  const traced = withPrismTracing(client, {
    env: { ...enabledEnv, PRISMTRACE_HOST: 'https://trace.example.test///' },
    fetchImpl: async (url, options) => { traces.push({ url, options }); return { ok: true }; },
  });
  await assert.rejects(traced.responses.create({ model: 'test-model', input: 'PRIVATE QUESTION' }), (actual) => actual === error);
  assert.equal(traces.length, 1);
  assert.equal(traces[0].url, 'https://trace.example.test/api/traces');
  const payload = JSON.parse(traces[0].options.body);
  assert.equal(payload.output_message, 'error');
  assert.equal(payload.input_messages[0].content, 'CFO');
  assert.doesNotMatch(traces[0].options.body, /PRIVATE|credential|private-trace-key/);
  assert.deepEqual(Object.keys(payload).sort(), ['input_messages', 'latency_ms', 'model', 'output_message', 'project_id']);
});

test('tracing is disabled without both credentials and makes no network request', async () => {
  const result = { output_text: 'Answer' };
  const client = { responses: { async create() { return result; } } };
  for (const env of [{}, { PRISMTRACE_API_KEY: 'key' }, { PRISMTRACE_PROJECT_ID: 'project' }]) {
    const traced = withPrismTracing(client, { env, fetchImpl() { assert.fail('Disabled tracing attempted network access'); } });
    assert.equal(traced, client);
    assert.equal(await traced.responses.create({}), result);
  }
});

test('telemetry rejection, synchronous failure, and HTTP error cannot fail model calls', async () => {
  const result = { output_text: 'Answer' };
  const providerError = new Error('Original model error');
  for (const fetchImpl of [
    async () => { throw new Error('Trace network failure'); },
    () => { throw new Error('Trace synchronous failure'); },
    async () => ({ ok: false, status: 503 }),
  ]) {
    const client = { responses: { async create({ fail }) { if (fail) throw providerError; return result; } } };
    const traced = withPrismTracing(client, { env: enabledEnv, fetchImpl });
    assert.equal(await traced.responses.create({ model: 'test-model' }), result);
    await assert.rejects(traced.responses.create({ model: 'test-model', fail: true }), (actual) => actual === providerError);
  }
});

test('pending telemetry does not delay model completion and is aborted after two seconds', async () => {
  const result = { output_text: 'Answer' };
  let traceSignal;
  const traced = withPrismTracing({ responses: { async create() { return result; } } }, {
    env: enabledEnv,
    fetchImpl: (_url, { signal }) => {
      traceSignal = signal;
      return new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(signal.reason), { once: true }));
    },
  });
  assert.equal(await traced.responses.create({ model: 'test-model' }), result);
  assert.equal(traceSignal.aborted, false);
  await new Promise((resolve, reject) => {
    const guard = setTimeout(() => reject(new Error('Trace request was not aborted')), 2_500);
    traceSignal.addEventListener('abort', () => { clearTimeout(guard); resolve(); }, { once: true });
  });
  assert.equal(traceSignal.reason.name, 'TimeoutError');
});

test('other SDK properties and methods keep their original receivers', () => {
  const responses = { create() {}, retrieve() { return this; }, resource: 'responses' };
  const client = { responses, otherResource: {}, method() { return this; } };
  const traced = withPrismTracing(client, { env: enabledEnv, fetchImpl: async () => ({ ok: true }) });
  assert.equal(traced.method(), client);
  assert.equal(traced.responses.retrieve(), responses);
  assert.equal(traced.responses.resource, 'responses');
  assert.equal(traced.otherResource, client.otherResource);
});
