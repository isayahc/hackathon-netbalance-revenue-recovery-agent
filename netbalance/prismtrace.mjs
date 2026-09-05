const DEFAULT_HOST = "https://prism.blockconvey.com";

/** Send one tool execution trace to PRISM without breaking the tool itself. */
export async function emitTrace({ input, output, model, latencyMs, sessionId, error } = {}) {
  const apiKey = process.env.PRISMTRACE_API_KEY;
  if (!apiKey) return false;

  const host = (process.env.PRISMTRACE_HOST ?? DEFAULT_HOST).replace(/\/$/, "");
  const projectId = process.env.PRISMTRACE_PROJECT_ID;
  if (!projectId) return false;
  const payload = {
    project_id: projectId,
    model: model ?? "netbalance-tool",
    input_messages: [{ role: "user", content: String(input ?? "") }],
    output_message: String(output ?? ""),
    latency_ms: Math.max(0, Math.round(latencyMs ?? 0)),
    session_id: sessionId ?? process.env.PRISMTRACE_SESSION_ID,
  };
  if (error) payload.error = String(error);

  try {
    const response = await fetch(`${host}/api/traces`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-PRISMtrace-Key": apiKey,
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}
