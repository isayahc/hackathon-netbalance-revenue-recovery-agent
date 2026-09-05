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

## Supabase Document Ingestion

The ingestion CLI uploads every file under a local directory to a Supabase
Storage bucket, preserving its relative directory structure. Configure
`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and optionally
`SUPABASE_STORAGE_BUCKET` using `.env.example`, then run:

```bash
npm run ingest -- ./documents
```

The target bucket must already exist. The service-role key is required for
server-side uploads and must never be exposed to browser code or committed.
The command prints a JSON manifest of uploaded files and their Storage paths.

## PRISM Live Tracing

Set `PRISMTRACE_API_KEY`, `PRISMTRACE_PROJECT_ID`, and `PRISMTRACE_HOST` in the
environment to trace Tavily searches and Supabase uploads. Set
`PRISMTRACE_SESSION_ID` to group calls from one agent run. Trace delivery is
best-effort and never prevents the underlying tool from completing.
