import assert from "node:assert/strict";
import test from "node:test";

import { analyzeRecoveryCase } from "../lib/agent/index";
import { buildNormalizedCaseEvidence } from "../lib/document-ingestion/index";

test("recommends a dispute and assembles a complete claim from reconciled evidence", async () => {
  const { evidence } = await buildNormalizedCaseEvidence();
  const analysis = analyzeRecoveryCase(evidence);

  assert.equal(analysis.shortPayment, 42800);
  assert.equal(analysis.affectedDistributionCenter, "Atlas Cloud");
  assert.equal(analysis.reconciliation.disputedCases, 240);
  assert.equal(analysis.reconciliation.externalEvidenceAgrees, true);
  assert.equal(analysis.reconciliation.conflictIdentified, true);
  assert.equal(analysis.eligible, true);
  assert.equal(analysis.decision, "dispute");
  assert.equal(analysis.confidence, "high");
  assert.deepEqual(analysis.blockers, []);
  assert.equal(analysis.reasoning.length, 7);
  assert.ok(analysis.reasoning.every((step) => step.status === "passed"));
  assert.equal(analysis.claimPackage?.deductionAmount, 42800);
  assert.equal(analysis.claimPackage?.evidenceReferences.length, 8);
});

test("blocks automatic dispute when shipment evidence is contradictory", async () => {
  const { evidence } = await buildNormalizedCaseEvidence();
  const altered = {
    ...evidence,
    pod_cases: 1220,
    shipment_evidence_consistent: false,
    validation_issues: ["ASN, BOL, POD, and expected receiving quantities do not agree."],
  };
  const analysis = analyzeRecoveryCase(altered);

  assert.equal(analysis.eligible, false);
  assert.equal(analysis.decision, "manual_review");
  assert.equal(analysis.confidence, "insufficient");
  assert.equal(analysis.claimPackage, null);
  assert.ok(analysis.blockers.includes("Shipment evidence is not internally consistent."));
  assert.equal(analysis.reasoning.find((step) => step.id === "shipment-evidence")?.status, "blocked");
});

test("blocks an otherwise valid claim outside the policy window", async () => {
  const { evidence } = await buildNormalizedCaseEvidence();
  const analysis = analyzeRecoveryCase(evidence, 61);

  assert.equal(analysis.eligible, false);
  assert.equal(analysis.decision, "not_eligible");
  assert.equal(analysis.claimPackage, null);
  assert.ok(analysis.blockers.includes("The 60-day dispute window has expired."));
});
