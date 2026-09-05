# GIDE Operator Guide

This guide is for the hackathon operator. The safe live change is intentionally limited to one value in `config/demo.ts`.

## Before the event

1. Install GIDE from <https://generativeide.com/download> on the hackathon laptop.
2. Sign in, open **File -> Open Folder**, and select this repository.
3. Approve folder trust.
4. Configure a reliable local or cloud model and open AI Chat with **Cmd+Shift+I**.
5. Run the practice sequence below once, including reverting the change.

## Practice sequence

Start in Ask Mode and send these prompts in order:

1. `Explain this project to me in simple language. Do not change any files.`
2. `Where is the logic that determines when a recovery case is complete? Do not change anything.`
3. `Show me the file and exact value controlling the success condition. Do not change anything yet.`

The answer must point to `config/demo.ts` and the value `completionCondition: "claim_submitted"`.

Then use Agent Mode and send:

> The agent currently treats claim submission as success. Change only the completionCondition value in config/demo.ts so the workflow completes only when the approved recovery amount equals the target recovery amount. Do not edit any other file. Then run npm run verify and summarize the result.

## Review before approval

The proposed diff is safe only when all of these are true:

- Exactly one file changed: `config/demo.ts`.
- Exactly one value changed.
- The old value is `"claim_submitted"`.
- The new value is `"recovery_verified"`.
- No credentials, `.env` files, APIs, amounts, or test expectations changed.
- `npm run verify` passes.

Reject the proposal if GIDE wants to edit additional files. Start a fresh chat and repeat the exact prompt.

## Expected behavior

Before the edit, a run ends after `Claim submitted` and reports `$0 recovered` plus `Business goal not achieved`.

After the edit, the run continues through Northstar's additional-evidence request, approval, and settlement. It ends with `$42,800 RECOVERED` and `Business outcome verified`.

## Restore the baseline

Ask GIDE:

> Change only completionCondition in config/demo.ts back to claim_submitted. Do not edit any other file. Run npm run verify.

Review the diff using the same checklist before approving it.
