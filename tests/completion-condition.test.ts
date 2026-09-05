import assert from "node:assert/strict";
import test from "node:test";

import { evaluateCompletion } from "../lib/agent/index";

test("claim-submitted mode stops without claiming recovered revenue", () => {
  const result = evaluateCompletion("claim_submitted", { claimSubmitted: true }, 42800);
  assert.deepEqual(result, {
    complete: true,
    technicalSuccess: true,
    businessGoalAchieved: false,
    recoveredAmount: 0,
  });
});

test("recovery-verified mode does not stop when the claim is merely submitted", () => {
  const result = evaluateCompletion("recovery_verified", { claimSubmitted: true }, 42800);
  assert.equal(result.complete, false);
  assert.equal(result.businessGoalAchieved, false);
  assert.equal(result.recoveredAmount, 0);
});

test("recovery-verified mode completes only for the verified target amount", () => {
  const result = evaluateCompletion(
    "recovery_verified",
    { claimSubmitted: true, settlementStatus: "approved_for_recovery", approvedAmount: 42800 },
    42800,
  );
  assert.equal(result.complete, true);
  assert.equal(result.businessGoalAchieved, true);
  assert.equal(result.recoveredAmount, 42800);

  const mismatch = evaluateCompletion(
    "recovery_verified",
    { claimSubmitted: true, settlementStatus: "approved_for_recovery", approvedAmount: 40000 },
    42800,
  );
  assert.equal(mismatch.complete, false);
});
