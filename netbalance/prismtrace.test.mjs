import test from "node:test";
import assert from "node:assert/strict";
import { emitTrace } from "./prismtrace.mjs";

test("emits a PRISM trace with the required auth header", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = {
    key: process.env.PRISMTRACE_API_KEY,
    project: process.env.PRISMTRACE_PROJECT_ID,
    host: process.env.PRISMTRACE_HOST,
  };
  let request;
  process.env.PRISMTRACE_API_KEY = "pt-sk-test";
  process.env.PRISMTRACE_PROJECT_ID = "project-test";
  process.env.PRISMTRACE_HOST = "https://prism.example";
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return new Response("{}", { status: 200 });
  };

  try {
    assert.equal(await emitTrace({
      input: "tool input",
      output: "tool output",
      model: "netbalance-tool",
      latencyMs: 12.4,
      sessionId: "session-test",
    }), true);
    assert.equal(request.url, "https://prism.example/api/traces");
    assert.equal(request.options.headers["X-PRISMtrace-Key"], "pt-sk-test");
    assert.deepEqual(JSON.parse(request.options.body), {
      project_id: "project-test",
      model: "netbalance-tool",
      input_messages: [{ role: "user", content: "tool input" }],
      output_message: "tool output",
      latency_ms: 12,
      session_id: "session-test",
    });
  } finally {
    globalThis.fetch = originalFetch;
    if (originalEnv.key === undefined) delete process.env.PRISMTRACE_API_KEY;
    else process.env.PRISMTRACE_API_KEY = originalEnv.key;
    if (originalEnv.project === undefined) delete process.env.PRISMTRACE_PROJECT_ID;
    else process.env.PRISMTRACE_PROJECT_ID = originalEnv.project;
    if (originalEnv.host === undefined) delete process.env.PRISMTRACE_HOST;
    else process.env.PRISMTRACE_HOST = originalEnv.host;
  }
});
