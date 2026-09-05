# Project Collection

This repository contains two independent applications. Each project has its own source tree, package manifest, dependencies, and build configuration.

## Projects

| Directory | Application | Stack |
| --- | --- | --- |
| [`netbalance-revenue-recovery-agent`](netbalance-revenue-recovery-agent) | Netbalance Revenue Recovery Agent | Next.js, React, TypeScript |
| [`clearline-app`](clearline-app) | Paynetic / Clearline app UI | Vite, React, TypeScript |

Run package commands from the relevant project directory. Do not install dependencies at the repository root.

### Netbalance

```bash
cd netbalance-revenue-recovery-agent
npm install
npm run verify
```

### Clearline

```bash
cd clearline-app
npm install
npm run build
```
