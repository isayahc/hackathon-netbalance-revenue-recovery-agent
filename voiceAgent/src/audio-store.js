import { randomUUID } from 'node:crypto';

export function createAudioStore({ ttlMs = 600_000, maxEntries = 200, now = Date.now } = {}) {
  if (!Number.isFinite(ttlMs) || ttlMs <= 0) {
    throw new TypeError('Audio TTL must be a positive number.');
  }
  if (!Number.isInteger(maxEntries) || maxEntries <= 0) {
    throw new TypeError('Audio capacity must be a positive integer.');
  }

  const entries = new Map();

  function pruneExpired() {
    const time = now();
    for (const [id, entry] of entries) {
      if (entry.expiresAt <= time) entries.delete(id);
    }
  }

  return {
    put(buffer, mimeType = 'audio/mpeg') {
      if (!Buffer.isBuffer(buffer)) throw new TypeError('Audio must be a Buffer.');
      pruneExpired();
      while (entries.size >= maxEntries) entries.delete(entries.keys().next().value);
      const id = randomUUID();
      entries.set(id, { buffer, mimeType, expiresAt: now() + ttlMs });
      return id;
    },

    get(id) {
      const entry = entries.get(id);
      if (!entry) return null;
      if (entry.expiresAt <= now()) {
        entries.delete(id);
        return null;
      }
      return { buffer: entry.buffer, mimeType: entry.mimeType };
    },

    clear() {
      entries.clear();
    },
  };
}
