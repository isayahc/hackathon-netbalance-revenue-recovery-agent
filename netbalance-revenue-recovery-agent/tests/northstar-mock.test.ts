import assert from "node:assert/strict";
import test from "node:test";

import {
  createClaim,
  getSettlement,
  MockNorthstarError,
  reviewClaim,
  submitAdditionalEvidence,
} from "../lib/northstar/index";

const claimPayload = {
  case_id: "ATLAS-42800",
  invoice: "INV-10482",
  po: "PO-77191",
  deduction_amount: 42800,
  evidence_references: Array.from({ length: 8 }, (_, index) => `document-${index + 1}.pdf`),
};

test("completes the deterministic Northstar follow-up and settlement loop", () => {
  const claim = createClaim(claimPayload);
  assert.deepEqual(claim, { claim_id: "AT-CL-88921", status: "submitted", amount: 42800 });

  const firstReview = reviewClaim(claim.claim_id, false);
  assert.equal(firstReview.status, "additional_documentation_required");

  const evidence = submitAdditionalEvidence(claim.claim_id, {
    document: "Power_Failover_Report.pdf",
    failover_status: "Backup power activated",
    service_status: "Operational",
    sla_breached: false,
  });
  assert.equal(evidence.evidence_verified, true);

  const finalReview = reviewClaim(claim.claim_id, true);
  assert.equal(finalReview.status, "approved");
  assert.equal("approved_amount" in finalReview && finalReview.approved_amount, 42800);

  assert.deepEqual(getSettlement(claim.claim_id), {
    claim_id: "AT-CL-88921",
    status: "approved_for_recovery",
    amount: 42800,
    reference: "AT-CR-77182",
  });
});

test("rejects incomplete claims and incorrect follow-up evidence", () => {
  assert.throws(() => createClaim({ ...claimPayload, evidence_references: [] }), MockNorthstarError);
  assert.throws(
    () => submitAdditionalEvidence("AT-CL-88921", { document: "Power_Failover_Report.pdf", failover_status: "wrong" }),
    MockNorthstarError,
  );
  assert.throws(() => reviewClaim("unknown", false), /Claim not found/);
});
