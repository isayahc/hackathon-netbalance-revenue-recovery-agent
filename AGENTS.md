# Agent Instructions

- Work only in `netbalance/` for code changes.
- Do not modify, delete, rename, or move any files under `clearline-app/`.
- Do not modify, delete, rename, or move any files under `netbalance-revenue-recovery-agent/`.
- Keep `clearline-app/` and `netbalance-revenue-recovery-agent/` unchanged unless the user explicitly authorizes a specific exception.

## PRISM tracing (do not remove)

This project sends traces to PRISM. Env vars: `PRISMTRACE_API_KEY`,
`PRISMTRACE_PROJECT_ID`, `PRISMTRACE_HOST`.

Tracing is currently wired at: `netbalance/tavily-websearch.mjs`, `netbalance/supabase-document-ingest.mjs`

**Standing rule.** Whenever you add or change an agent, chain, graph, tool,
retriever, or any entry point that calls a model, wire it to PRISM before you
finish. Unwired code is invisible in the dashboard. If you are unsure whether
something is covered, assume it is not and wire it.
