import assert from "node:assert/strict";
import test from "node:test";

import { buildNormalizedCaseEvidence, extractCaseEvidence } from "../lib/document-ingestion/index";

test("ingests all PDFs and extracts normalized case evidence", async () => {
  const { documents, evidence } = await buildNormalizedCaseEvidence();

  assert.equal(documents.length, 8);
  assert.ok(documents.every((document) => document.pageCount === 1));
  assert.ok(documents.every((document) => document.text.length > 200));
  assert.equal(evidence.invoice_number, "INV-10482");
  assert.equal(evidence.po_number, "PO-77191");
  assert.equal(evidence.invoice_amount, 584200);
  assert.equal(evidence.payment_received, 541400);
  assert.equal(evidence.deduction_amount, 42800);
  assert.equal(evidence.deduction_dc, "DC 027");
  assert.equal(evidence.retailer_received_cases, 1220);
  assert.deepEqual([evidence.asn_cases, evidence.bol_cases, evidence.pod_cases], [1460, 1460, 1460]);
  assert.equal(evidence.seal_number, "S-44719");
  assert.equal(evidence.seal_intact, true);
  assert.equal(evidence.dispute_window_days, 60);
  assert.equal(evidence.shipment_evidence_consistent, true);
  assert.deepEqual(evidence.validation_issues, []);
});

test("a changed POD quantity changes the normalized result and raises a consistency issue", async () => {
  const { documents } = await buildNormalizedCaseEvidence();
  const altered = documents.map((document) =>
    document.id === "proof_of_delivery"
      ? { ...document, text: document.text.replace("Cases delivered 1,460", "Cases delivered 1,220") }
      : document,
  );

  const evidence = extractCaseEvidence(altered);

  assert.equal(evidence.pod_cases, 1220);
  assert.equal(evidence.shipment_evidence_consistent, false);
  assert.ok(evidence.validation_issues.includes("ASN, BOL, POD, and expected receiving quantities do not agree."));
});
