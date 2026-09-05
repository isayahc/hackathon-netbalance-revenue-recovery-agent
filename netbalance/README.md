# Netbalance

## Tavily Web Search

This directory contains the agent-facing Tavily web search tool. It uses Tavily's
HTTP API directly and has no runtime dependencies.

Set `TAVILY_API_KEY` in the environment, then run:

```bash
npm run search -- "latest revenue recovery trends"
```

The command prints JSON containing the query, optional answer, and normalized
search results. Agents can also import `tavilyWebSearch` from
`./tavily-websearch.mjs`.

Run the local tests with `npm test`.
