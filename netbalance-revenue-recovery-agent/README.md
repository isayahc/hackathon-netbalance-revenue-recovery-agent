# Netbalance Revenue Recovery Agent

A deterministic hackathon demo of an AI agent investigating a fictional **$42,800 Atlas Cloud power-service deduction**. The agent reads synthetic outage evidence, verifies a missing Power failover report through PRISM, builds a claim, interacts with a mock customer API, and verifies the final settlement.

This README is the complete operator runbook. If you are opening the project for the first time, follow the sections in order.

> **Synthetic data only:** Atlas Cloud, its records, and every financial value in this repository are fictional and intended only for demonstration.

## What the demo proves

The demo contrasts two definitions of “done”:

| Mode | Completion condition | What the agent does | Result shown |
| --- | --- | --- | --- |
| Baseline | `"claim_submitted"` | Stops when the claim API succeeds | `$0 recovered` and `Business goal not achieved` |
| Improved | `"recovery_verified"` | Continues through evidence follow-up, approval, and settlement verification | `$42,800 recovered` and `Business outcome verified` |

The lesson is that a successful tool call is not necessarily a successful business outcome. The hackathon edit changes one configuration value so the agent works toward verified recovery instead of stopping after submission.

The repository is currently configured as shown in [`config/demo.ts`](config/demo.ts). Check that file before presenting; do not assume it is in baseline mode.

## Demo scenario

- Case: `ATLAS-42800`
- Customer: Atlas Cloud
- Invoice: `INV-10482`
- Purchase order: `PO-77191`
- Incident: grid power outage, Atlanta
- Invoice amount: `$268,000`
- Payment received: `$225,200`
- Deduction to recover: `$42,800`
- Retailer receiving record: `1,220` cases
- ASN, Bill of Lading, and signed Proof of Delivery: `1,460` cases
- Disputed difference: `240` cases
- Delivery seal: `S-44719`, intact
- Source documents: eight synthetic PDFs in [`public/evidence`](public/evidence)

## Repository tour

| Location | Purpose |
| --- | --- |
| [`app`](app) | Next.js pages, the recovery runner, and API routes |
| [`app/recovery-runner.tsx`](app/recovery-runner.tsx) | Browser-side orchestration of the full recovery workflow |
| [`config/demo.ts`](config/demo.ts) | The one-value hackathon completion-condition switch |
| [`lib/document-ingestion`](lib/document-ingestion) | PDF extraction, normalization, provenance, and validation |
| [`lib/agent`](lib/agent) | Reconciliation, eligibility reasoning, claim assembly, and completion evaluation |
| [`lib/northstar`](lib/northstar) | Deterministic fictional Atlas Cloud customer service |
| [`lib/prism`](lib/prism) | Optional PRISM trace delivery |
| [`public/evidence`](public/evidence) | The eight synthetic source PDFs |
| [`tests`](tests) | Tests for ingestion, reasoning, completion, PRISM, and Northstar behavior |
| [`GIDE_GUIDE.md`](GIDE_GUIDE.md) | Focused instructions for performing the live edit in GIDE |

## 1. Prepare before the hackathon

### Requirements

- Node.js `20.9` or newer
- npm
- A modern browser
- GIDE, if you plan to demonstrate the AI-assisted configuration change
- Optional PRISM project credentials for live tracing

Confirm the local tools:

```bash
node --version
npm --version
```

### Install and verify

From the repository root:

```bash
npm install
npm run verify
```

`npm run verify` runs the unit tests, ESLint, TypeScript checks, and a production build. Do not present from a machine where this command fails.

### Configure PRISM tracing (optional)

The business workflow works without PRISM. To show trace telemetry, copy the example environment file:

```bash
cp .env.example .env.local
```

Then fill in these values in `.env.local`:

```dotenv
PRISMTRACE_HOST=https://prism.blockconvey.com
PRISMTRACE_PROJECT_ID=your-project-id
PRISMTRACE_API_KEY=your-ingest-api-key
```

Keep the API key server-side. Never commit `.env.local`, paste credentials into GIDE chat, or show secrets on screen. For a Vercel deployment, add the same variables in the Vercel project settings and redeploy.

The UI reports trace state during a run:

- `PRISM · connected`: traces are being delivered.
- `PRISM · not configured`: credentials are absent; the recovery demo still works.
- `PRISM · degraded`: trace delivery failed; the recovery workflow continues.

### Install and prepare GIDE

1. Install GIDE from [generativeide.com/download](https://generativeide.com/download).
2. Open **File → Open Folder** and choose this repository.
3. Approve folder trust.
4. Configure a reliable local or cloud model.
5. Open AI Chat with **Cmd+Shift+I**.
6. Practice the complete edit-and-restore sequence in [`GIDE_GUIDE.md`](GIDE_GUIDE.md).

### Rehearsal checklist

Complete this at least once before the event:

- Run `npm run verify` successfully.
- Start the app and open every navigation item.
- Confirm all eight PDFs appear on the Documents page.
- Run both baseline and improved completion modes.
- Confirm Reset clears a completed run.
- If using PRISM, confirm a session appears with all expected stages.
- Practice the exact GIDE prompt and inspect its diff before accepting it.
- Restore the desired starting mode after rehearsal.
- Close unrelated browser tabs, disable distracting notifications, and keep terminal font size readable.

## 2. Start the app on hackathon day

From the repository root:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Keep the terminal visible enough to notice compilation or runtime errors, but present primarily from the browser.

Before the audience arrives:

1. Open [`config/demo.ts`](config/demo.ts) and confirm the intended starting value.
2. Refresh the home page and confirm the header says **Ready to run**.
3. Open **Documents** and spot-check the signed Proof of Delivery.
4. Open **Activity**, click **Reset** if an old run is visible, and return to the case page.
5. Confirm PRISM shows the expected configuration status, if applicable.

## 3. Recommended live demo script

### Part A — Establish the business problem

On the case page, explain:

> Northstar short-paid a $268,000 invoice by $42,800, claiming that 240 cases were missing. The agent must determine whether the deduction is valid and, if not, recover the money.

Point out the conflict: Northstar records `1,220` received cases, while the ASN, Bill of Lading, and signed Proof of Delivery all support `1,460` delivered cases.

### Part B — Show evidence, not just an answer

Open **Documents** and briefly show that the case is grounded in eight source PDFs. Emphasize that normalized fields retain document provenance and that the evidence is synthetic.

Useful development endpoints are also available:

- `GET /api/evidence` returns normalized evidence and source documents.
- `POST /api/agent/analyze` returns the reasoning result and assembled claim package.

### Part C — Demonstrate the flawed baseline

Set the value in [`config/demo.ts`](config/demo.ts) to:

```ts
completionCondition: "claim_submitted",
```

Wait for the development server to recompile, refresh the browser, and open **Activity**. The side panel should say **Claim submitted**.

Click **Run agent**. The workflow should stop after `Claim submitted` and report:

- `Agent marked case complete`
- `$0 recovered`
- `Business goal not achieved`

Narration:

> The API call succeeded, so the baseline agent declared victory. But the retailer has not approved the claim and no money has been recovered.

### Part D — Make the hackathon change with GIDE

In GIDE Ask Mode, use these prompts to let it discover the relevant logic without editing files:

1. `Explain this project to me in simple language. Do not change any files.`
2. `Where is the logic that determines when a recovery case is complete? Do not change anything.`
3. `Show me the file and exact value controlling the success condition. Do not change anything yet.`

Then switch to Agent Mode and send exactly:

> The agent currently treats claim submission as success. Change only the completionCondition value in config/demo.ts so the workflow completes only when the approved recovery amount equals the target recovery amount. Do not edit any other file. Then run npm run verify and summarize the result.

Approve the change only if the diff changes one value in one file:

```diff
-  completionCondition: "claim_submitted",
+  completionCondition: "recovery_verified",
```

Reject the proposal if it edits tests, APIs, dollar amounts, environment files, or any additional source file. Start a fresh GIDE chat and repeat the exact prompt.

### Part E — Prove the business outcome

After `npm run verify` passes:

1. Refresh the app.
2. Confirm the Activity side panel says **Recovery verified**.
3. Click **Reset**, then **Run agent**.
4. Let the activity timeline finish; a normal run takes about 10 seconds.

The improved workflow should:

1. Parse and normalize eight PDFs.
2. Detect the `$42,800` short payment.
3. Reconcile shipment and retailer records.
4. Confirm the claim is inside the policy window.
5. Assemble and submit the claim package.
6. Receive Northstar's request for additional evidence.
7. Submit the signed POD, receiver, and intact seal details.
8. Receive approval.
9. Verify the settlement equals the `$42,800` target.

The final UI should report `$42,800 RECOVERED`, `Revenue recovered`, and `Outcome verified`.

Close with:

> The code change was tiny, but it changed the agent's objective from completing a task to achieving and verifying the business result.

## 4. PRISM trace checkpoints

Every run creates a stable session ID such as `NB-10482-xxxxxxxx`. The server emits traces for:

1. `document_ingestion`
2. `evidence_reconciliation`
3. `dispute_decision`
4. `claim_submission`
5. `retailer_response` (improved mode)
6. `additional_evidence_response` (improved mode)
7. `outcome_verification` (improved mode)
8. `completion_evaluation`

The last trace includes `business_goal_achieved` and `recovered_amount`. Use the shared session ID to compare a baseline run, which ends with a zero recovery, against an improved run, which ends with a verified `$42,800` recovery.

## 5. Validation commands

Run individual checks while diagnosing a problem:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Run the complete gate before presenting or committing:

```bash
npm run verify
```

## 6. Troubleshooting

### The app does not start

- Confirm Node.js is version `20.9` or newer.
- Run `npm install` again if dependencies are missing.
- Read the terminal error; another process may already be using port `3000`.
- If Next.js selects another port, open the URL printed in the terminal.

### The UI shows the wrong completion mode

- Check the actual value in [`config/demo.ts`](config/demo.ts).
- Save the file and wait for Next.js to recompile.
- Refresh the page; the completion condition is supplied when the page renders.
- Use **Reset** before starting another run.

### The run stops after claim submission

This is expected in baseline mode. Change `completionCondition` to `"recovery_verified"`, refresh, reset, and run again.

### The run fails or reports that the case is ineligible

- Run `npm test` to verify document extraction and reasoning.
- Confirm all eight PDFs still exist in [`public/evidence`](public/evidence).
- Do not rename, replace, or manually edit the evidence PDFs immediately before a demo.
- Reload the page after any server-side change.

### PRISM is not configured or degraded

- Confirm `.env.local` contains all three PRISM variables with no extra quotes.
- Restart `npm run dev` after changing environment variables.
- For a deployment, confirm the values exist in Vercel and redeploy.
- Continue the presentation if tracing remains unavailable; PRISM failure is intentionally non-blocking.

### GIDE proposes a large diff

Reject it. The intended hackathon modification is exactly one value in [`config/demo.ts`](config/demo.ts). Start a new chat and reuse the exact Agent Mode prompt from this README.

### You need to restore the baseline quickly

Change only this value:

```ts
completionCondition: "claim_submitted",
```

Then run `npm run verify`, refresh the browser, and click **Reset**.

## 7. Architecture and reliability notes

The application deliberately favors a reliable live demonstration:

- All inputs are local synthetic PDFs, so the evidence pipeline does not depend on an external document system.
- Northstar endpoints under `/api/northstar/claims` are deterministic and stateless, which keeps behavior consistent across local and Vercel serverless instances.
- PRISM telemetry is optional and cannot block the recovery workflow.
- Reset is client-side and deterministic.
- The completion rule is centralized in one typed configuration value.
- Tests cover extraction, reconciliation, completion behavior, tracing, and mock retailer responses.

The request flow is:

```text
Eight PDFs
   ↓
Extract and normalize evidence
   ↓
Reconcile records and determine eligibility
   ↓
Assemble claim package
   ↓
Submit to mock Northstar API
   ↓
Baseline: stop at technical success ($0 recovered)
   or
Improved: answer evidence request → approval → verify settlement ($42,800 recovered)
```

## E2E smoke test

Start the app, then run the HTTP smoke test from another terminal:

```bash
npm run dev -- --port 3010
E2E_BASE_URL=http://localhost:3010 npm run e2e
```

The test covers the Atlas case page, analysis, both PRISM evidence-gate states,
claim submission, follow-up evidence, approval, and settlement verification.

## 8. Safety and event rules

- Use only the synthetic documents and fictional financial data included here.
- Never add real customer, retailer, employee, invoice, or payment information.
- Never commit `.env.local`, API keys, tokens, or trace credentials.
- Never paste secrets into GIDE or another model prompt.
- Do not copy production Netbalance code, prompts, records, or retailer integrations into this repository.
- Review every AI-generated diff before accepting it.
- Keep the live edit constrained to [`config/demo.ts`](config/demo.ts).
- Run `npm run verify` after every accepted AI edit.

## 9. After the hackathon

1. Stop the local development server with **Ctrl+C**.
2. Remove temporary credentials from the presentation machine if it is shared.
3. Review `git status` before committing anything.
4. Confirm no `.env.local` or generated secret is staged.
5. Decide whether the repository should remain in baseline or improved mode, document that decision, and verify once more.

## Quick operator checklist

```text
[ ] Node and dependencies are installed
[ ] npm run verify passes
[ ] Starting completion mode is confirmed in config/demo.ts
[ ] App loads and all eight documents are visible
[ ] Baseline run ends at $0 recovered
[ ] GIDE changes one value in one file
[ ] Improved run ends at $42,800 recovered
[ ] PRISM status is understood (connected, not configured, or degraded)
[ ] No credentials or real customer data are exposed
[ ] Reset and fallback steps have been rehearsed
```
