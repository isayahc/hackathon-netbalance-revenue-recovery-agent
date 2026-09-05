import type { EvidenceDocumentId } from "./manifest";
import type { IngestedDocument } from "./ingest";

type EvidenceSource = {
  documentId: EvidenceDocumentId;
  fileName: string;
};

export type NormalizedCaseEvidence = {
  case_id: "ATLAS-42800";
  invoice_number: string;
  po_number: string;
  invoice_amount: number;
  payment_received: number;
  deduction_amount: number;
  deduction_reason: string;
  deduction_dc: string;
  expected_cases: number;
  retailer_received_cases: number;
  asn_cases: number;
  bol_cases: number;
  pod_cases: number;
  seal_number: string;
  seal_intact: boolean;
  dispute_window_days: number;
  shipment_evidence_consistent: boolean;
  validation_issues: string[];
  provenance: Record<string, EvidenceSource>;
};

export class EvidenceExtractionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EvidenceExtractionError";
  }
}

function requiredMatch(text: string, pattern: RegExp, field: string): string {
  const value = text.match(pattern)?.[1]?.trim();
  if (!value) {
    throw new EvidenceExtractionError(`Could not extract ${field} from its source document.`);
  }
  return value;
}

function amount(text: string, label: string): number {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const raw = requiredMatch(text, new RegExp(`${escaped}\\s+\\$([\\d,]+(?:\\.\\d{2})?)`, "i"), label);
  return Number(raw.replaceAll(",", ""));
}

function integer(text: string, label: string, suffix = ""): number {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const raw = requiredMatch(text, new RegExp(`${escaped}\\s+(-?[\\d,]+)${suffix}`, "i"), label);
  return Number(raw.replaceAll(",", ""));
}

function source(documents: Map<EvidenceDocumentId, IngestedDocument>, id: EvidenceDocumentId): IngestedDocument {
  const document = documents.get(id);
  if (!document) throw new EvidenceExtractionError(`Required document ${id} was not ingested.`);
  return document;
}

export function extractCaseEvidence(input: IngestedDocument[]): NormalizedCaseEvidence {
  const documents = new Map(input.map((document) => [document.id, document]));
  const invoice = source(documents, "invoice");
  const remittance = source(documents, "remittance");
  const purchaseOrder = source(documents, "purchase_order");
  const asn = source(documents, "asn");
  const bol = source(documents, "bill_of_lading");
  const pod = source(documents, "proof_of_delivery");
  const receiving = source(documents, "receiving_report");
  const policy = source(documents, "deduction_policy");

  const invoiceNumber = requiredMatch(invoice.text, /Invoice number\s+(INV-\d+)/i, "invoice number");
  const poNumber = requiredMatch(invoice.text, /Purchase order\s+(PO-\d+)/i, "purchase order");
  const invoiceAmount = amount(invoice.text, "Invoice total");
  const paymentReceived = amount(remittance.text, "Payment issued");
  const deductionAmount = amount(remittance.text, "Deduction amount");
  const deductionReason = requiredMatch(remittance.text, /Reason\s+(Power Service Interruption)/i, "deduction reason");
  const deductionDc = requiredMatch(remittance.text, /Reference\s+(Atlas Cloud)\s*\/\s*Atlanta/i, "deduction customer");
  const expectedCases = integer(receiving.text, "Expected quantity", "\\s+cases");
  const retailerReceivedCases = integer(receiving.text, "Received in retailer system", "\\s+cases");
  const asnCases = integer(asn.text, "Cases dispatched");
  const bolCases = integer(bol.text, "Cases loaded");
  const podCases = integer(pod.text, "Cases delivered");
  const sealNumber = requiredMatch(pod.text, /Seal number\s+(S-\d+)/i, "seal number");
  const sealCondition = requiredMatch(pod.text, /Seal condition\s+(Intact|Broken)/i, "seal condition");
  const disputeWindowDays = integer(policy.text, "Dispute window", "\\s+days");

  const validationIssues: string[] = [];
  if (invoiceAmount - paymentReceived !== deductionAmount) {
    validationIssues.push("Invoice less payment does not equal the deduction amount.");
  }
  if (invoiceNumber !== requiredMatch(remittance.text, /Invoice number\s+(INV-\d+)/i, "remittance invoice number")) {
    validationIssues.push("Invoice number does not match the remittance advice.");
  }
  if (poNumber !== requiredMatch(purchaseOrder.text, /Purchase order\s+(PO-\d+)/i, "purchase order number")) {
    validationIssues.push("Purchase order number does not match the invoice.");
  }
  if (new Set([expectedCases, asnCases, bolCases, podCases]).size !== 1) {
    validationIssues.push("ASN, BOL, POD, and expected receiving quantities do not agree.");
  }
  if (!pod.text.includes("Signed by Atlas Cloud Operations")) {
    validationIssues.push("Incident operations report is missing the Atlas Cloud signature.");
  }

  const from = (document: IngestedDocument): EvidenceSource => ({ documentId: document.id, fileName: document.fileName });

  return {
    case_id: "ATLAS-42800",
    invoice_number: invoiceNumber,
    po_number: poNumber,
    invoice_amount: invoiceAmount,
    payment_received: paymentReceived,
    deduction_amount: deductionAmount,
    deduction_reason: deductionReason,
    deduction_dc: deductionDc,
    expected_cases: expectedCases,
    retailer_received_cases: retailerReceivedCases,
    asn_cases: asnCases,
    bol_cases: bolCases,
    pod_cases: podCases,
    seal_number: sealNumber,
    seal_intact: sealCondition.toLowerCase() === "intact",
    dispute_window_days: disputeWindowDays,
    shipment_evidence_consistent: new Set([expectedCases, asnCases, bolCases, podCases]).size === 1,
    validation_issues: validationIssues,
    provenance: {
      invoice_number: from(invoice),
      po_number: from(invoice),
      invoice_amount: from(invoice),
      payment_received: from(remittance),
      deduction_amount: from(remittance),
      deduction_reason: from(remittance),
      deduction_dc: from(remittance),
      expected_cases: from(receiving),
      retailer_received_cases: from(receiving),
      asn_cases: from(asn),
      bol_cases: from(bol),
      pod_cases: from(pod),
      seal_number: from(pod),
      seal_intact: from(pod),
      dispute_window_days: from(policy),
    },
  };
}
