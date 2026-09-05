import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import twilio from 'twilio';
import { createApp, PROMPTS } from '../src/app.js';
import { createAudioStore } from '../src/audio-store.js';

const FIRST_CALL = `CA${'1'.repeat(32)}`;
const SECOND_CALL = `CA${'2'.repeat(32)}`;
const PUBLIC_URL = 'https://voice-agent.example';
const AUTH_TOKEN = 'test-twilio-auth-token';
const quietLogger = { warn() {} };

function deferred() {
  let resolve;
  const promise = new Promise(done => { resolve = done; });
  return { promise, resolve };
}

function gatherPath(xml) {
  const match = xml.match(/<Gather\b[^>]*\baction="([^"]+)"/);
  assert.ok(match, `Expected a listening Gather in: ${xml}`);
  return match[1].replaceAll('&amp;', '&');
}

function waitPath(xml) {
  const match = xml.match(/<Redirect\b[^>]*>([^<]+)<\/Redirect>/);
  assert.ok(match, `Expected a waiting redirect in: ${xml}`);
  return match[1].replaceAll('&amp;', '&');
}

async function fixture(t, { agent, speech, config = {} } = {}) {
  const audioStore = createAudioStore();
  const app = createApp({
    config: {
      publicBaseUrl: PUBLIC_URL,
      twilioAuthToken: AUTH_TOKEN,
      sessionTtlMs: 60_000,
      maxCalls: 10,
      turnTimeoutMs: 5_000,
      ...config,
    },
    agent: agent || { respond: async () => ({ replyText: 'Sample answer.', history: [] }) },
    speech: speech || { synthesize: async () => null },
    audioStore,
    logger: quietLogger,
  });
  const server = createServer(app);
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const localUrl = `http://127.0.0.1:${server.address().port}`;
  t.after(async () => {
    app.locals.close();
    await new Promise(resolve => {
      server.close(resolve);
      server.closeAllConnections();
    });
  });

  async function post(path, fields = {}, { signature, headers = {} } = {}) {
    const body = { CallSid: FIRST_CALL, ...fields };
    const response = await fetch(`${localUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Twilio-Signature': signature ?? twilio.getExpectedTwilioSignature(AUTH_TOKEN, `${PUBLIC_URL}${path}`, body),
        ...headers,
      },
      body: new URLSearchParams(body),
    });
    return { status: response.status, xml: await response.text(), headers: response.headers };
  }

  function turn(callSid, path) {
    const turnId = new URL(path, PUBLIC_URL).searchParams.get('turn');
    const result = app.locals.calls.get(callSid)?.turns.get(turnId);
    assert.ok(result, 'Expected a stored call turn.');
    return result;
  }

  return { app, audioStore, localUrl, post, turn };
}

test('signed phone flow immediately acknowledges, polls, then plays the answer inside the next Gather', async t => {
  const pending = deferred();
  const requests = [];
  const f = await fixture(t, {
    agent: { respond: async request => { requests.push(request); return pending.promise; } },
    speech: { synthesize: async text => {
      if (text === PROMPTS.hold) return '/audio/holding-message';
      if (text === 'Cash decreased because sample receivables were delayed.') return '/audio/controller-answer';
      return null;
    } },
  });
  const incoming = await f.post('/voice/incoming');
  assert.equal(incoming.status, 200);
  assert.match(incoming.headers.get('content-type'), /xml/);
  const listening = gatherPath(incoming.xml);
  assert.match(incoming.xml, /sample company data/);
  const repeatedIncoming = await f.post('/voice/incoming');
  assert.equal(repeatedIncoming.xml, incoming.xml);

  const ack = await f.post(listening, { SpeechResult: 'Why is cash down this month?' });
  assert.equal(ack.status, 200);
  assert.match(ack.xml, /<Play>https:\/\/voice-agent\.example\/audio\/holding-message<\/Play>/);
  assert.doesNotMatch(ack.xml, /<Gather/);
  assert.equal(requests.length, 1);
  assert.equal(requests[0].question, 'Why is cash down this month?');
  assert.equal(f.turn(FIRST_CALL, listening).state, 'working');

  const polling = waitPath(ack.xml);
  const wait = await f.post(polling);
  assert.match(wait.xml, /<Pause length="2"\/>/);
  assert.equal(waitPath(wait.xml), polling);

  const history = [{ role: 'user', content: 'Why is cash down this month?' }];
  pending.resolve({ replyText: 'Cash decreased because sample receivables were delayed.', history });
  await f.turn(FIRST_CALL, listening).work;
  const answer = await f.post(polling);
  assert.match(answer.xml, /<Gather[^>]*>[\s\S]*<Play>https:\/\/voice-agent\.example\/audio\/controller-answer<\/Play>[\s\S]*<\/Gather>/);
  assert.notEqual(gatherPath(answer.xml), listening);
  assert.deepEqual(f.app.locals.calls.get(FIRST_CALL).history, history);
  assert.equal((await f.post(polling)).xml, answer.xml);
});

test('duplicate speech webhooks execute the Controller only once', async t => {
  const pending = deferred();
  let calls = 0;
  const f = await fixture(t, { agent: { respond: async () => { calls += 1; return pending.promise; } } });
  const path = gatherPath((await f.post('/voice/incoming')).xml);
  const first = await f.post(path, { SpeechResult: 'Why is cash down?' });
  const duplicate = await f.post(path, { SpeechResult: 'Why is cash down?' });
  assert.equal(duplicate.xml, first.xml);
  assert.equal(calls, 1);
  assert.equal(f.app.locals.calls.get(FIRST_CALL).questionCount, 1);
  pending.resolve({ replyText: 'Sample answer.', history: [] });
  await f.turn(FIRST_CALL, path).work;
  await f.post(path, { SpeechResult: 'Why is cash down?' });
  assert.equal(calls, 1);
});

test('webhooks reject forged signatures, invalid calls, and a signature over a spoofed origin', async t => {
  const f = await fixture(t);
  assert.equal((await f.post('/voice/incoming', {}, { signature: 'forged' })).status, 403);
  assert.equal((await f.post('/voice/incoming', {}, { signature: '' })).status, 403);
  assert.equal((await f.post('/voice/incoming', { CallSid: 'invalid' })).status, 400);
  const forgedOrigin = twilio.getExpectedTwilioSignature(AUTH_TOKEN, 'https://attacker.example/voice/incoming', { CallSid: FIRST_CALL });
  assert.equal((await f.post('/voice/incoming', {}, {
    signature: forgedOrigin,
    headers: { 'X-Forwarded-Host': 'attacker.example', 'X-Forwarded-Proto': 'https' },
  })).status, 403);
  assert.equal(f.app.locals.calls.size, 0);
  assert.equal((await fetch(`${f.localUrl}/voice/incoming`)).status, 405);
});

test('a Controller deadline aborts work and returns a retry prompt without committing history', async t => {
  let signal;
  const f = await fixture(t, {
    config: { turnTimeoutMs: 50 },
    agent: { respond: async request => { signal = request.signal; return new Promise(() => {}); } },
  });
  const path = gatherPath((await f.post('/voice/incoming')).xml);
  const ack = await f.post(path, { SpeechResult: 'Why is cash down?' });
  await f.turn(FIRST_CALL, path).work;
  assert.equal(signal.aborted, true);
  const answer = await f.post(waitPath(ack.xml));
  assert.match(answer.xml, /couldn.t get a confirmed answer/);
  assert.notEqual(gatherPath(answer.xml), path);
  assert.deepEqual(f.app.locals.calls.get(FIRST_CALL).history, []);
});

test('completed call status aborts a pending Controller and removes the session', async t => {
  let signal;
  const f = await fixture(t, { agent: { respond: async request => {
    signal = request.signal;
    return new Promise(() => {});
  } } });
  const path = gatherPath((await f.post('/voice/incoming')).xml);
  const ack = await f.post(path, { SpeechResult: 'Why is cash down?' });
  const pendingWork = f.turn(FIRST_CALL, path).work;
  const completed = await f.post('/voice/status', { CallStatus: 'completed' });
  assert.equal(completed.status, 204);
  await pendingWork;
  assert.equal(signal.aborted, true);
  assert.equal(f.app.locals.calls.get(FIRST_CALL), undefined);
  const afterEnd = await f.post(waitPath(ack.xml));
  assert.match(afterEnd.xml, /expired/);
  assert.match(afterEnd.xml, /<Hangup\/>/);
});

test('a second consecutive empty speech result ends the call', async t => {
  let requests = 0;
  const f = await fixture(t, { agent: { respond: async () => { requests += 1; return {}; } } });
  const path = gatherPath((await f.post('/voice/incoming')).xml);
  const firstSilence = await f.post(path);
  assert.match(firstSilence.xml, /didn.t catch that/);
  const secondSilence = await f.post(gatherPath(firstSilence.xml), { SpeechResult: ' ' });
  assert.match(secondSilence.xml, /<Hangup\/>/);
  assert.equal(requests, 0);
});

test('separate calls keep Controller results and histories isolated', async t => {
  const first = deferred();
  const second = deferred();
  const f = await fixture(t, { agent: { respond: async ({ question }) => question === 'first question' ? first.promise : second.promise } });
  const firstPath = gatherPath((await f.post('/voice/incoming')).xml);
  const secondPath = gatherPath((await f.post('/voice/incoming', { CallSid: SECOND_CALL })).xml);
  const firstAck = await f.post(firstPath, { SpeechResult: 'first question' });
  const secondAck = await f.post(secondPath, { CallSid: SECOND_CALL, SpeechResult: 'second question' });
  second.resolve({ replyText: 'Second caller answer.', history: [{ content: 'second history' }] });
  await f.turn(SECOND_CALL, secondPath).work;
  assert.deepEqual(f.app.locals.calls.get(FIRST_CALL).history, []);
  assert.match((await f.post(waitPath(firstAck.xml))).xml, /<Pause/);
  const secondAnswer = await f.post(waitPath(secondAck.xml), { CallSid: SECOND_CALL });
  assert.match(secondAnswer.xml, /Second caller answer/);
  assert.doesNotMatch(secondAnswer.xml, /First caller answer/);
  const crossCall = await f.post(waitPath(firstAck.xml), { CallSid: SECOND_CALL });
  assert.match(crossCall.xml, /<Hangup\/>/);
  first.resolve({ replyText: 'First caller answer.', history: [{ content: 'first history' }] });
  await f.turn(FIRST_CALL, firstPath).work;
  assert.match((await f.post(waitPath(firstAck.xml))).xml, /First caller answer/);
  assert.deepEqual(f.app.locals.calls.get(FIRST_CALL).history, [{ content: 'first history' }]);
  assert.deepEqual(f.app.locals.calls.get(SECOND_CALL).history, [{ content: 'second history' }]);
});

test('audio is served with the correct type and unavailable audio returns 404', async t => {
  const f = await fixture(t);
  const id = f.audioStore.put(Buffer.from('example audio'));
  const found = await fetch(`${f.localUrl}/audio/${id}`);
  assert.equal(found.status, 200);
  assert.match(found.headers.get('content-type'), /audio\/mpeg/);
  assert.equal(found.headers.get('cache-control'), 'private, no-store');
  assert.equal(await found.text(), 'example audio');
  assert.equal((await fetch(`${f.localUrl}/audio/missing`)).status, 404);
});
