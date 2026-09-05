import { randomUUID } from 'node:crypto';

export function createCallStore({ ttlMs = 1800000, maxCalls = 100, now = Date.now } = {}) {
  const calls = new Map();

  function remove(callSid) {
    const call = calls.get(callSid);
    if (!call) return;
    call.closed = true;
    for (const turn of call.turns.values()) turn.abortController?.abort();
    calls.delete(callSid);
  }

  function sweep() {
    for (const [sid, call] of calls) {
      if (now() - call.touchedAt >= ttlMs) remove(sid);
    }
  }

  function get(callSid) {
    sweep();
    const call = calls.get(callSid);
    if (call) call.touchedAt = now();
    return call;
  }

  function create(callSid) {
    const existing = get(callSid);
    if (existing) return existing;
    if (calls.size >= maxCalls) throw new Error('The voice agent is at call capacity.');
    const call = { callSid, history: [], turns: new Map(), currentTurn: null, touchedAt: now(), closed: false, questionCount: 0 };
    calls.set(callSid, call);
    return call;
  }

  function nextTurn(call) {
    const turn = { id: randomUUID(), state: 'listening', silenceCount: 0 };
    call.turns.set(turn.id, turn);
    call.currentTurn = turn.id;
    // Retain recent responses for webhook retries, but bound each call's memory.
    if (call.turns.size > 8) call.turns.delete(call.turns.keys().next().value);
    return turn;
  }

  return {
    create, get, nextTurn, remove, sweep,
    clear() { for (const sid of calls.keys()) remove(sid); },
    get size() { sweep(); return calls.size; },
  };
}
