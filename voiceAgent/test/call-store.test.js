import test from 'node:test';
import assert from 'node:assert/strict';
import { createCallStore } from '../src/call-store.js';

test('activity renews call lifetime and expiry cancels pending work', () => {
  let now = 0;
  const store = createCallStore({ ttlMs: 100, now: () => now });
  const call = store.create('first');
  const turn = store.nextTurn(call);
  turn.abortController = new AbortController();
  now = 99;
  assert.equal(store.get('first'), call);
  now = 198;
  store.sweep();
  assert.equal(call.closed, false);
  now = 199;
  store.sweep();
  assert.equal(store.get('first'), undefined);
  assert.equal(call.closed, true);
  assert.equal(turn.abortController.signal.aborted, true);
});

test('capacity rejects new calls while retries reuse an existing session', () => {
  const store = createCallStore({ maxCalls: 1 });
  const first = store.create('first');
  assert.equal(store.create('first'), first);
  assert.throws(() => store.create('second'), /capacity/);
  assert.equal(store.size, 1);
  store.remove('first');
  assert.equal(store.create('second').callSid, 'second');
  assert.equal(store.size, 1);
});

test('expired calls release capacity before a new call is allocated', () => {
  let now = 0;
  const store = createCallStore({ ttlMs: 10, maxCalls: 1, now: () => now });
  const first = store.create('first');
  now = 10;
  assert.equal(store.create('second').callSid, 'second');
  assert.equal(first.closed, true);
  assert.equal(store.size, 1);
});

test('recent turns remain available for retries while retained history stays bounded', () => {
  const store = createCallStore();
  const call = store.create('first');
  const oldest = store.nextTurn(call);
  let latest;
  for (let index = 0; index < 10; index += 1) latest = store.nextTurn(call);
  assert.equal(call.turns.size, 8);
  assert.equal(call.turns.has(oldest.id), false);
  assert.equal(call.turns.get(latest.id), latest);
  assert.equal(call.currentTurn, latest.id);
});

test('clear closes every call and cancels each pending turn', () => {
  const store = createCallStore();
  const first = store.create('first');
  const second = store.create('second');
  const turns = [store.nextTurn(first), store.nextTurn(second)];
  for (const turn of turns) turn.abortController = new AbortController();
  store.clear();
  store.remove('missing');
  assert.equal(store.size, 0);
  assert.equal(first.closed, true);
  assert.equal(second.closed, true);
  assert.ok(turns.every(turn => turn.abortController.signal.aborted));
});
