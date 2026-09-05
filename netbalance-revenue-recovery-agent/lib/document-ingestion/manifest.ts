export const evidenceManifest = [
  { id: "invoice", label: "Atlas Cloud invoice", fileName: "Atlas_Invoice_INV-10482.pdf" },
  { id: "purchase_order", label: "Atlas Cloud service order", fileName: "Atlas_Service_Order_PO-77191.pdf" },
  { id: "remittance", label: "Atlas Cloud deduction notice", fileName: "Atlas_Deduction_Notice_INV-10482.pdf" },
  { id: "asn", label: "Outage confirmation", fileName: "Atlas_Outage_Confirmation.pdf" },
  { id: "bill_of_lading", label: "Service continuity report", fileName: "Atlas_Service_Continuity_Report.pdf" },
  { id: "proof_of_delivery", label: "Incident operations report", fileName: "Atlas_Incident_Operations_Report.pdf" },
  { id: "receiving_report", label: "Atlas operations report", fileName: "Atlas_Operations_Report.pdf" },
  { id: "deduction_policy", label: "Atlas Cloud SLA policy", fileName: "Atlas_SLA_Policy.pdf" },
] as const;

export type EvidenceDocumentId = (typeof evidenceManifest)[number]["id"];
