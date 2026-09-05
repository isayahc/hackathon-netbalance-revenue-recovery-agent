import { atlasScenario } from "@/config/scenario";

export type PowerFailoverEvidence = {
  backupPowerActivated: boolean;
  serviceOperational: boolean;
  slaBreached: boolean;
};

export type EvidenceVerificationInput = {
  caseId: string;
  customer: string;
  incident: string;
  deductionAmount: number;
  outageConfirmed: boolean;
  powerFailoverReport?: PowerFailoverEvidence;
};

export type EvidenceVerificationResult = {
  status: "insufficient" | "sufficient";
  missingEvidence: string[];
  decisionSupported: boolean;
  decision: "blocked" | "deduction_invalid";
  reason: string;
};

export function verifyEvidence(input: EvidenceVerificationInput): EvidenceVerificationResult {
  const missingEvidence: string[] = [];

  if (!input.outageConfirmed) missingEvidence.push("Confirmed grid outage");
  if (!input.powerFailoverReport) missingEvidence.push(atlasScenario.missingEvidence);

  if (missingEvidence.length > 0) {
    return {
      status: "insufficient",
      missingEvidence,
      decisionSupported: false,
      decision: "blocked",
      reason: "Evidence insufficient. Netbalance must not act on an incomplete conclusion.",
    };
  }

  const failover = input.powerFailoverReport;
  const supportsInvalidDeduction =
    input.caseId === atlasScenario.caseId &&
    input.customer === atlasScenario.customer &&
    input.incident === atlasScenario.incident &&
    input.deductionAmount === atlasScenario.deductionAmount &&
    failover.backupPowerActivated &&
    failover.serviceOperational &&
    !failover.slaBreached;

  return {
    status: supportsInvalidDeduction ? "sufficient" : "insufficient",
    missingEvidence: supportsInvalidDeduction ? [] : ["Evidence supporting the proposed decision"],
    decisionSupported: supportsInvalidDeduction,
    decision: supportsInvalidDeduction ? "deduction_invalid" : "blocked",
    reason: supportsInvalidDeduction
      ? "Backup power activated, service remained operational, and the SLA was not breached."
      : "The available evidence does not support invalidating this deduction.",
  };
}
