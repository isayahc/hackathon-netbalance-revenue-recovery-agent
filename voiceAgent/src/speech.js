import { createHash } from 'node:crypto';

const MAX_CACHED_PROMPTS = 200;

export function createSpeechService({
  apiKey,
  voiceId,
  modelId = 'eleven_flash_v2_5',
  timeoutMs = 6_000,
  audioStore,
  fetchImpl = fetch,
  logger = console,
} = {}) {
  if (!audioStore?.put || !audioStore?.get) {
    throw new TypeError('An audio store is required.');
  }
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new TypeError('Speech timeout must be a positive number.');
  }

  // Hash keys avoid retaining a second copy of conversation text in memory.
  const promptCache = new Map();

  return {
    async synthesize(text, { signal } = {}) {
      if (!apiKey || !voiceId || typeof text !== 'string' || !text.trim() || signal?.aborted) {
        return null;
      }

      const spokenText = text.trim();
      const cacheKey = createHash('sha256').update(spokenText).digest('hex');
      for (const [key, id] of promptCache) {
        if (!audioStore.get(id)) promptCache.delete(key);
      }
      const cachedId = promptCache.get(cacheKey);
      if (cachedId) {
        promptCache.delete(cacheKey);
        promptCache.set(cacheKey, cachedId);
        return `/audio/${cachedId}`;
      }

      const controller = new AbortController();
      const onExternalAbort = () => controller.abort(signal.reason);
      signal?.addEventListener('abort', onExternalAbort, { once: true });
      const timeout = setTimeout(() => controller.abort(new Error('Speech timed out.')), timeoutMs);
      let onAbort;
      const aborted = new Promise((_, reject) => {
        onAbort = () => reject(new Error('Speech request aborted.'));
        controller.signal.addEventListener('abort', onAbort, { once: true });
      });

      try {
        // The deadline includes downloading the audio, not only the response headers.
        const audioRequest = (async () => {
          const response = await fetchImpl(
            `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}?output_format=mp3_44100_128`,
            {
              method: 'POST',
              headers: {
                'xi-api-key': apiKey,
                'Content-Type': 'application/json',
                Accept: 'audio/mpeg',
              },
              body: JSON.stringify({ text: spokenText, model_id: modelId }),
              signal: controller.signal,
            },
          );
          if (!response.ok) {
            controller.abort();
            return null;
          }
          return Buffer.from(await response.arrayBuffer());
        })();
        const buffer = await Promise.race([audioRequest, aborted]);
        if (controller.signal.aborted || !buffer?.length) return null;

        const id = audioStore.put(buffer, 'audio/mpeg');
        while (promptCache.size >= MAX_CACHED_PROMPTS) {
          promptCache.delete(promptCache.keys().next().value);
        }
        promptCache.set(cacheKey, id);
        return `/audio/${id}`;
      } catch {
        // Provider errors can contain request text or credentials; log neither.
        logger?.warn?.('ElevenLabs speech unavailable; using fallback speech.');
        return null;
      } finally {
        clearTimeout(timeout);
        signal?.removeEventListener('abort', onExternalAbort);
        controller.signal.removeEventListener('abort', onAbort);
      }
    },
  };
}
