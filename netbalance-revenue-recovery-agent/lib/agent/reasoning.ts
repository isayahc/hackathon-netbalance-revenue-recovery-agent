import type { NormalizedCaseEvidence } from "@/lib/document-ingestion";

export type ReasoningStep = {
  id: string;
  label: string;
  detail: string;
  status: "passed" | "blocked";
  sourceFields: string[];
};

export type ShipmentReconciliation = {
  expectedCases: number;
  retailerReceivedCases: number;
  deliveredCases: number;
  disputedCases: number;
  externalEvidenceAgrees: boolean;
  conflictIdentified: boolean;
};

export type ClaimPackage = {
  caseId: string;
  invoiceNumber: string;
  poNumber: string;
  distributionCenter: string;
  deductionAmount: number;
  deductionReason: string;
  disputedCases: number;
  basis: string;
  evidenceReferences: string[];
};

export type RecoveryAnalysis = {
  caseId: string;
  decision: "dispute" | "manual_review" | "not_eligible";
  eligible: boolean;
  confidence: "high" | "insufficient";
  shortPayment: number;
  affectedDistributionCenter: string;
  reconciliation: ShipmentReconciliation;
  policy: { disputeWindowDays: number; claimAgeDays: number; withinWindow: boolean };
  reasoning: ReasoningStep[];
  blockers: string[];
  claimPackage: ClaimPackage | null;
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function detectShortPayment(evidence: NormalizedCaseEvidence): number {
  return evidence.invoice_amount - evidence.payment_received;
}

export function identifyAffectedDistributionCenter(evidence: NormalizedCaseEvidence): string {
  return evidence.deduction_dc;
}

export function reconcileShipmentEvidence(evidence: NormalizedCaseEvidence): ShipmentReconciliation {
  const externalEvidenceAgrees =
    evidence.shipment_evidence_consistent &&
    new Set([evidence.expected_cases, evidence.asn_cases, evidence.bol_cases, evidence.pod_cases]).size === 1;
  const disputedCases = evidence.expected_cases - evidence.retailer_received_cases;

  return {
    expectedCases: evidence.expected_cases,
    retailerReceivedCases: evidence.retailer_received_cases,
    deliveredCases: evidence.pod_cases,
    disputedCases,
    externalEvidenceAgrees,
    conflictIdentified: externalEvidenceAgrees && disputedCases > 0,
  };
}

export function classifyDeduction(
  evidence: NormalizedCaseEvidence,
  reconciliation: ShipmentReconciliation,
): "potentially_invalid_shortage" | "needs_review" {
  return evidence.deduction_reason === "Power Service Interruption" && reconciliation.conflictIdentified
    ? "potentially_invalid_shortage"
    : "needs_review";
}

export function readRetailerPolicy(evidence: NormalizedCaseEvidence, claimAgeDays: number) {
  return {
    disputeWindowDays: evidence.dispute_window_days,
    claimAgeDays,
    withinWindow: claimAgeDays <= evidence.dispute_window_days,
  };
}

export function evaluateDisputeEligibility(
  evidence: NormalizedCaseEvidence,
  claimAgeDays = 14,
): Omit<RecoveryAnalysis, "reasoning" | "claimPackage"> {
  const shortPayment = detectShortPayment(evidence);
  const affectedDistributionCenter = identifyAffectedDistributionCenter(evidence);
  const reconciliation = reconcileShipmentEvidence(evidence);
  const classification = classifyDeduction(evidence, reconciliation);
  const policy = readRetailerPolicy(evidence, claimAgeDays);
  const blockers = [...evidence.validation_issues];

  if (shortPayment !== evidence.deduction_amount) {
    blockers.push("The calculated short payment does not equal the remittance deduction.");
  }
  if (!reconciliation.externalEvidenceAgrees) {
    blockers.push("Shipment evidence is not internally consistent.");
  }
  if (!reconciliation.conflictIdentified) {
    blockers.push("The receiving record does not conflict with complete delivery evidence.");
  }
  if (!evidence.seal_intact) {
    blockers.push("The delivery seal was not intact.");
  }
  if (!policy.withinWindow) {
    blockers.push(`The ${policy.disputeWindowDays}-day dispute window has expired.`);
  }

  const eligible = blockers.length === 0 && classification === "potentially_invalid_shortage";

  return {
    caseId: evidence.case_id,
    decision: eligible ? "dispute" : policy.withinWindow ? "manual_review" : "not_eligible",
    eligible,
    confidence: eligible ? "high" : "insufficient",
    shortPayment,
    affectedDistributionCenter,
    reconciliation,
    policy,
    blockers: [...new Set(blockers)],
  };
}

export function assembleClaimPackage(
  evidence: NormalizedCaseEvidence,
  analysis: Omit<RecoveryAnalysis, "reasoning" | "claimPackage">,
): ClaimPackage | null {
  if (!analysis.eligible) return null;

  return {
    caseId: evidence.case_id,
    invoiceNumber: evidence.invoice_number,
    poNumber: evidence.po_number,
    distributionCenter: evidence.deduction_dc,
    deductionAmount: evidence.deduction_amount,
    deductionReason: evidence.deduction_reason,
    disputedCases: analysis.reconciliation.disputedCases,
    basis: `Signed delivery evidence confirms ${evidence.pod_cases.toLocaleString()} cases while the retailer system records ${evidence.retailer_received_cases.toLocaleString()}.`,
    evidenceReferences: [
      evidence.provenance.invoice_amount.fileName,
      "Purchase_Order_PO-77191.pdf",
      evidence.provenance.deduction_amount.fileName,
      evidence.provenance.asn_cases.fileName,
      evidence.provenance.bol_cases.fileName,
      evidence.provenance.pod_cases.fileName,
      evidence.provenance.retailer_received_cases.fileName,
      evidence.provenance.dispute_window_days.fileName,
    ],
  };
}

export function analyzeRecoveryCase(evidence: NormalizedCaseEvidence, claimAgeDays = 14): RecoveryAnalysis {
  const analysis = evaluateDisputeEligibility(evidence, claimAgeDays);
  const { reconciliation, policy } = analysis;
  const passed = (condition: boolean): "passed" | "blocked" => (condition ? "passed" : "blocked");
  const reasoning: ReasoningStep[] = [
    {
      id: "short-payment",
      label: "Short payment detected",
      detail: `${currency.format(evidence.invoice_amount)} invoiced minus ${currency.format(evidence.payment_received)} received equals ${currency.format(analysis.shortPayment)}.`,
      status: passed(analysis.shortPayment === evidence.deduction_amount),
      sourceFields: ["invoice_amount", "payment_received", "deduction_amount"],
    },
    {
      id: "distribution-center",
      label: "Deduction localized",
      detail: `${analysis.affectedDistributionCenter} - Atlanta is identified on the remittance advice.`,
      status: passed(analysis.affectedDistributionCenter === "Atlas Cloud"),
      sourceFields: ["deduction_dc"],
    },
    {
      id: "receiving-record",
      label: "Retailer receiving record analyzed",
      detail: `${reconciliation.retailerReceivedCases.toLocaleString()} of ${reconciliation.expectedCases.toLocaleString()} cases recorded as received.`,
      status: passed(reconciliation.disputedCases > 0),
      sourceFields: ["expected_cases", "retailer_received_cases"],
    },
    {
      id: "shipment-evidence",
      label: "Shipment evidence reconciled",
      detail: `ASN ${evidence.asn_cases.toLocaleString()}, BOL ${evidence.bol_cases.toLocaleString()}, and signed POD ${evidence.pod_cases.toLocaleString()} cases; seal ${evidence.seal_number} ${evidence.seal_intact ? "intact" : "not intact"}.`,
      status: passed(reconciliation.externalEvidenceAgrees && evidence.seal_intact),
      sourceFields: ["asn_cases", "bol_cases", "pod_cases", "seal_number", "seal_intact"],
    },
    {
      id: "evidence-conflict",
      label: "Evidence conflict identified",
      detail: `Retailer system is short by ${reconciliation.disputedCases.toLocaleString()} cases versus signed delivery evidence.`,
      status: passed(reconciliation.conflictIdentified),
      sourceFields: ["retailer_received_cases", "pod_cases"],
    },
    {
      id: "policy",
      label: "Atlas Cloud SLA policy checked",
      detail: `Claim age ${policy.claimAgeDays} days; policy allows disputes within ${policy.disputeWindowDays} days.`,
      status: passed(policy.withinWindow),
      sourceFields: ["dispute_window_days"],
    },
    {
      id: "decision",
      label: analysis.eligible ? "Dispute recommended" : "Automatic dispute blocked",
      detail: analysis.eligible
        ? `${currency.format(evidence.deduction_amount)} shortage deduction is supported for dispute.`
        : analysis.blockers.join(" "),
      status: passed(analysis.eligible),
      sourceFields: [],
    },
  ];

  return {
    ...analysis,
    reasoning,
    claimPackage: assembleClaimPackage(evidence, analysis),
  };
}
