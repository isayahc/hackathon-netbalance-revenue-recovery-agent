import test from "node:test";
import assert from "node:assert/strict";
import { tavilyWebSearch } from "./tavily-websearch.mjs";

test("normalizes a Tavily response for agents", async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.TAVILY_API_KEY;
  process.env.TAVILY_API_KEY = "test-key";
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://api.tavily.com/search");
    assert.equal(options.headers.Authorization, "Bearer test-key");
    return new Response(
      JSON.stringify({
        query: "netbalance",
        answer: "A concise answer",
        results: [{
          title: "Example",
          url: "https://example.com",
          content: "Relevant evidence",
          score: 0.9,
          published_date: "2026-01-01",
        }],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  };

  try {
    const result = await tavilyWebSearch({ query: " netbalance " });
    assert.deepEqual(result.results[0], {
      title: "Example",
      url: "https://example.com",
      content: "Relevant evidence",
      score: 0.9,
      publishedDate: "2026-01-01",
    });
    assert.equal(result.answer, "A concise answer");
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.TAVILY_API_KEY;
    else process.env.TAVILY_API_KEY = originalKey;
  }
});

test("rejects a missing API key", async () => {
  const originalKey = process.env.TAVILY_API_KEY;
  delete process.env.TAVILY_API_KEY;

  try {
    await assert.rejects(
      () => tavilyWebSearch({ query: "netbalance" }),
      /TAVILY_API_KEY is not set/,
    );
  } finally {
    if (originalKey !== undefined) process.env.TAVILY_API_KEY = originalKey;
  }
});
