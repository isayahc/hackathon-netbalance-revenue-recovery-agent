const DEFAULT_HOST = 'https://prism-api-prod.up.railway.app';

// Preserve the SDK's other methods and their original receivers.
function overrideProperty(target, property, replacement) {
  return new Proxy(target, {
    get(object, key) {
      if (key === property) return replacement;
      const value = Reflect.get(object, key, object);
      return typeof value === 'function' ? value.bind(object) : value;
    },
  });
}

/** Trace only model execution metadata; model inputs and outputs stay local. */
export function withPrismTracing(client, { env = process.env, fetchImpl = globalThis.fetch } = {}) {
  if (!env.PRISMTRACE_API_KEY || !env.PRISMTRACE_PROJECT_ID) return client;

  async function emitTrace(body, started, status) {
    try {
      const host = (env.PRISMTRACE_HOST || DEFAULT_HOST).replace(/\/+$/, '');
      const role = body?.text?.format?.name === 'controller_answer' ? 'Controller' : 'CFO';
      await fetchImpl(`${host}/api/traces`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-PRISMtrace-Key': env.PRISMTRACE_API_KEY,
        },
        body: JSON.stringify({
          project_id: env.PRISMTRACE_PROJECT_ID,
          model: typeof body?.model === 'string' ? body.model : 'unknown',
          input_messages: [{ role: 'user', content: role }],
          output_message: status,
          latency_ms: Math.max(0, Math.round(performance.now() - started)),
        }),
        signal: AbortSignal.timeout(2_000),
      });
    } catch {
      // Telemetry is best effort and must never change a model result or error.
    }
  }

  async function create(...args) {
    const started = performance.now();
    try {
      const result = await client.responses.create(...args);
      void emitTrace(args[0], started, 'completed');
      return result;
    } catch (error) {
      void emitTrace(args[0], started, 'error');
      throw error;
    }
  }

  return overrideProperty(client, 'responses', overrideProperty(client.responses, 'create', create));
}
