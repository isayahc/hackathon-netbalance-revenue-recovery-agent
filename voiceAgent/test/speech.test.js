import test from 'node:test';
import assert from 'node:assert/strict';
import { createAudioStore } from '../src/audio-store.js';
import { createSpeechService } from '../src/speech.js';

const logger = { warn() {} };
const audioResponse = () => new Response(Buffer.from('test MP3 audio'), {
  headers: { 'Content-Type': 'audio/mpeg' },
});

function service(options = {}) {
  return createSpeechService({
    apiKey: 'test-key',
    voiceId: 'test-voice',
    audioStore: createAudioStore(),
    logger,
    ...options,
  });
}

test('audio expires at its deadline and capacity evicts the oldest entry', () => {
  let now = 0;
  const store = createAudioStore({ ttlMs: 10, maxEntries: 2, now: () => now });
  const first = store.put(Buffer.from('one'));
  const second = store.put(Buffer.from('two'));
  const third = store.put(Buffer.from('three'), 'audio/wav');
  assert.equal(store.get(first), null);
  assert.deepEqual(store.get(third), { buffer: Buffer.from('three'), mimeType: 'audio/wav' });
  now = 10;
  assert.equal(store.get(second), null);
  assert.equal(store.get(third), null);
  const fourth = store.put(Buffer.from('four'));
  store.clear();
  assert.equal(store.get(fourth), null);
});

test('synthesis posts ElevenLabs settings and reuses audio only until it expires', async () => {
  let now = 0;
  let calls = 0;
  const audioStore = createAudioStore({ ttlMs: 10, now: () => now });
  const speech = service({
    audioStore,
    fetchImpl: async (url, request) => {
      calls += 1;
      assert.equal(url, 'https://api.elevenlabs.io/v1/text-to-speech/test-voice?output_format=mp3_44100_128');
      assert.equal(request.headers['xi-api-key'], 'test-key');
      assert.deepEqual(JSON.parse(request.body), {
        text: 'Stay on the line.', model_id: 'eleven_flash_v2_5',
      });
      return audioResponse();
    },
  });
  const first = await speech.synthesize('Stay on the line.');
  assert.match(first, /^\/audio\/[\da-f-]{36}$/);
  assert.equal(await speech.synthesize('Stay on the line.'), first);
  assert.equal(calls, 1);
  now = 10;
  const refreshed = await speech.synthesize('Stay on the line.');
  assert.notEqual(refreshed, first);
  assert.equal(calls, 2);
  assert.equal(audioStore.get(first.slice('/audio/'.length)), null);
});

test('an evicted audio clip is regenerated instead of returning a broken URL', async () => {
  let calls = 0;
  const speech = service({
    audioStore: createAudioStore({ maxEntries: 1 }),
    fetchImpl: async () => { calls += 1; return audioResponse(); },
  });
  const first = await speech.synthesize('first');
  await speech.synthesize('second');
  assert.notEqual(await speech.synthesize('first'), first);
  assert.equal(calls, 3);
});

test('prompt caching remains bounded even with a larger audio store', async () => {
  let calls = 0;
  const speech = service({
    audioStore: createAudioStore({ maxEntries: 1_000 }),
    fetchImpl: async () => { calls += 1; return audioResponse(); },
  });
  for (let index = 0; index <= 200; index += 1) await speech.synthesize(`prompt ${index}`);
  assert.equal(calls, 201);
  await speech.synthesize('prompt 200');
  assert.equal(calls, 201);
  await speech.synthesize('prompt 0');
  assert.equal(calls, 202);
});

test('missing credentials, empty text, and an already aborted signal avoid provider calls', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls += 1; return audioResponse(); };
  assert.equal(await service({ apiKey: '', fetchImpl }).synthesize('hello'), null);
  assert.equal(await service({ voiceId: '', fetchImpl }).synthesize('hello'), null);
  assert.equal(await service({ fetchImpl }).synthesize('  '), null);
  assert.equal(await service({ fetchImpl }).synthesize('hello', { signal: AbortSignal.abort() }), null);
  assert.equal(calls, 0);
});

test('provider failures return null and do not leak error contents in logs', async () => {
  const logs = [];
  const options = { logger: { warn: (...args) => logs.push(args.join(' ')) } };
  const unavailable = service({ ...options, fetchImpl: async () => new Response('secret', { status: 429 }) });
  assert.equal(await unavailable.synthesize('private question'), null);
  const failing = service({ ...options, fetchImpl: async () => { throw new Error('test-key private question'); } });
  assert.equal(await failing.synthesize('private question'), null);
  assert.equal(await service({ fetchImpl: async () => new Response('') }).synthesize('hello'), null);
  assert.ok(logs.length > 0);
  assert.doesNotMatch(logs.join(' '), /test-key|private question|secret/);
});

test('upstream cancellation aborts the provider and settles even if it ignores abort', async () => {
  const controller = new AbortController();
  let requestSignal;
  const speech = service({ fetchImpl: async (_, request) => {
    requestSignal = request.signal;
    return new Promise(() => {});
  } });
  const pending = speech.synthesize('hello', { signal: controller.signal });
  controller.abort();
  assert.equal(await pending, null);
  assert.equal(requestSignal.aborted, true);
});

test('the deadline covers audio body download and late responses are never cached', async () => {
  let finishBody;
  let stored = 0;
  let requestSignal;
  const speech = service({
    timeoutMs: 10,
    audioStore: { get: () => null, put: () => { stored += 1; return 'late'; } },
    fetchImpl: async (_, request) => {
      requestSignal = request.signal;
      return { ok: true, arrayBuffer: () => new Promise(resolve => { finishBody = resolve; }) };
    },
  });
  assert.equal(await speech.synthesize('hello'), null);
  assert.equal(requestSignal.aborted, true);
  finishBody(new ArrayBuffer(10));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(stored, 0);
});

test('canceling one caller does not poison later synthesis or a usable cached prompt', async () => {
  let calls = 0;
  const speech = service({ fetchImpl: async () => {
    calls += 1;
    if (calls === 1) return new Promise(() => {});
    return audioResponse();
  } });
  const controller = new AbortController();
  const canceled = speech.synthesize('Shared greeting', { signal: controller.signal });
  controller.abort();
  assert.equal(await canceled, null);
  const successful = await speech.synthesize('Shared greeting');
  assert.match(successful, /^\/audio\/[\da-f-]{36}$/);
  assert.equal(await speech.synthesize('Shared greeting', { signal: controller.signal }), null);
  assert.equal(await speech.synthesize('Shared greeting'), successful);
  assert.equal(calls, 2);
});
