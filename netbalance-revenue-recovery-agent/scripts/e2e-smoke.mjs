import assert from "node:assert/strict";

const baseUrl = (process.env.E2E_BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");

async function request(path, init) {
  const response = await fetch(`${baseUrl}${path}`, init);
  let body;
  try {
    body = await response.json();
  } catch {
    body = await response.text();
  }
  assert.ok(response.ok, `${path} returned ${response.status}: ${JSON.stringify(body)}`);
  return body;
}

const home = await fetch(`${baseUrl}/`);
assert.equal(home.status, 200);
assert.match(await home.text(), /Atlas Cloud/);

const analysis = await request("/api/agent/analyze", { method: "POST" });
assert.equal(analysis.eligible, true);
assert.equal(analysis.claimPackage.deductionAmount, 42_800);

const commonEvidence = {
  caseId: "ATLAS-42800",
  customer: "Atlas Cloud",
  incident: "grid power outage",
  deductionAmount: 42_800,
  outageConfirmed: true,
};
const blocked = await request("/api/prism/verify", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(commonEvidence),
});
assert.equal(blocked.status, "insufficient");
assert.equal(blocked.decision, "blocked");

const verified = await request("/api/prism/verify", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    ...commonEvidence,
    powerFailoverReport: {
      backupPowerActivated: true,
      serviceOperational: true,
      slaBreached: false,
    },
  }),
});
assert.equal(verified.status, "sufficient");
assert.equal(verified.decision, "deduction_invalid");

const claim = await request("/api/northstar/claims", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    case_id: analysis.claimPackage.caseId,
    invoice: analysis.claimPackage.invoiceNumber,
    po: analysis.claimPackage.poNumber,
    deduction_amount: analysis.claimPackage.deductionAmount,
    evidence_references: analysis.claimPackage.evidenceReferences,
  }),
});
assert.equal(claim.status, "submitted");

const review = await request(`/api/northstar/claims/${claim.claim_id}`);
assert.equal(review.status, "additional_documentation_required");

const evidence = await request(`/api/northstar/claims/${claim.claim_id}/evidence`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    document: "Proof_of_Delivery_DC027.pdf",
    seal_number: "S-44719",
    signed_by: "Northstar Receiving",
    receiver: "J. Reynolds",
  }),
});
assert.equal(evidence.evidence_verified, true);

const approval = await request(`/api/northstar/claims/${claim.claim_id}?evidence_submitted=true`);
assert.equal(approval.approved_amount, 42_800);
const settlement = await request(`/api/northstar/claims/${claim.claim_id}/settlement`);
assert.equal(settlement.amount, 42_800);

console.log(JSON.stringify({
  baseUrl,
  pages: { home: 200 },
  analysis: "eligible",
  prism: { blocked: blocked.status, verified: verified.status },
  recovery: { claim: claim.status, evidenceVerified: evidence.evidence_verified, settlement: settlement.amount },
}, null, 2));
