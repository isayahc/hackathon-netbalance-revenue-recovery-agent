import assert from "node:assert/strict";
import test from "node:test";

import { verifyEvidence } from "../lib/prism/evidence-gate";

const baseCase = {
  caseId: "ATLAS-42800",
  customer: "Atlas Cloud",
  incident: "grid power outage",
  deductionAmount: 42_800,
  outageConfirmed: true,
};

test("blocks the decision when the power failover report is missing", () => {
  const result = verifyEvidence(baseCase);

  assert.equal(result.status, "insufficient");
  assert.deepEqual(result.missingEvidence, ["Power failover report"]);
  assert.equal(result.decisionSupported, false);
  assert.equal(result.decision, "blocked");
});

test("supports an invalid-deduction decision after complete failover evidence", () => {
  const result = verifyEvidence({
    ...baseCase,
    powerFailoverReport: {
      backupPowerActivated: true,
      serviceOperational: true,
      slaBreached: false,
    },
  });

  assert.equal(result.status, "sufficient");
  assert.deepEqual(result.missingEvidence, []);
  assert.equal(result.decisionSupported, true);
  assert.equal(result.decision, "deduction_invalid");
});

test("blocks a complete but contradictory evidence set", () => {
  const result = verifyEvidence({
    ...baseCase,
    powerFailoverReport: {
      backupPowerActivated: true,
      serviceOperational: true,
      slaBreached: true,
    },
  });

  assert.equal(result.status, "insufficient");
  assert.equal(result.decisionSupported, false);
});
