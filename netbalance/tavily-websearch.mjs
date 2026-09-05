const TAVILY_ENDPOINT = "https://api.tavily.com/search";

/**
 * Search the web through Tavily and return a stable, agent-friendly shape.
 */
export async function tavilyWebSearch({
  query,
  maxResults = 5,
  searchDepth = "basic",
  includeAnswer = false,
} = {}) {
  if (typeof query !== "string" || query.trim().length === 0) {
    throw new Error("A non-empty query is required");
  }

  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) {
    throw new Error("TAVILY_API_KEY is not set");
  }

  const response = await fetch(TAVILY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      query: query.trim(),
      max_results: maxResults,
      search_depth: searchDepth,
      include_answer: includeAnswer,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Tavily search failed (${response.status}): ${details}`);
  }

  const data = await response.json();
  return {
    query: data.query ?? query.trim(),
    answer: data.answer ?? null,
    results: Array.isArray(data.results)
      ? data.results.map((result) => ({
          title: result.title ?? "",
          url: result.url ?? "",
          content: result.content ?? "",
          score: result.score ?? null,
          publishedDate: result.published_date ?? null,
        }))
      : [],
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const query = process.argv.slice(2).join(" ");

  tavilyWebSearch({ query, includeAnswer: true })
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}
