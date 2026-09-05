export const evidenceManifest = [
  { id: "invoice", label: "Invoice", fileName: "Invoice_INV-10482.pdf" },
  { id: "purchase_order", label: "Purchase Order", fileName: "Purchase_Order_PO-77191.pdf" },
  { id: "remittance", label: "Remittance Advice", fileName: "Remittance_Advice_INV-10482.pdf" },
  { id: "asn", label: "Advance Shipping Notice", fileName: "ASN_PO-77191_DC027.pdf" },
  { id: "bill_of_lading", label: "Bill of Lading", fileName: "Bill_of_Lading_DC027.pdf" },
  { id: "proof_of_delivery", label: "Proof of Delivery", fileName: "Proof_of_Delivery_DC027.pdf" },
  { id: "receiving_report", label: "Northstar Receiving Report", fileName: "Northstar_Receiving_Report_DC027.pdf" },
  { id: "deduction_policy", label: "Northstar Deduction Policy", fileName: "Northstar_Deduction_Policy.pdf" },
] as const;

export type EvidenceDocumentId = (typeof evidenceManifest)[number]["id"];
