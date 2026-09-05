export const NORTHSTAR_CLAIM_ID = "NS-CL-88921";
export const NORTHSTAR_CREDIT_REFERENCE = "NS-CR-77182";

export type ClaimSubmission = {
  case_id: string;
  invoice: string;
  po: string;
  deduction_amount: number;
  evidence_references: string[];
};

export type EvidenceSubmission = {
  document: string;
  seal_number: string;
  signed_by: string;
  receiver: string;
};

export class MockNorthstarError extends Error {
  constructor(message: string, public status = 400) {
    super(message);
    this.name = "MockNorthstarError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function createClaim(input: unknown) {
  if (!isRecord(input)) throw new MockNorthstarError("A claim payload is required.");

  const required = {
    case_id: "NB-10482",
    invoice: "INV-10482",
    po: "PO-77191",
    deduction_amount: 42800,
  } as const;

  for (const [field, expected] of Object.entries(required)) {
    if (input[field] !== expected) {
      throw new MockNorthstarError(`Claim field ${field} did not match the expected case.`);
    }
  }
  if (!Array.isArray(input.evidence_references) || input.evidence_references.length !== 8) {
    throw new MockNorthstarError("The claim requires all eight evidence references.");
  }

  return {
    claim_id: NORTHSTAR_CLAIM_ID,
    status: "submitted" as const,
    amount: 42800,
  };
}

export function reviewClaim(claimId: string, additionalEvidenceSubmitted: boolean) {
  assertClaimId(claimId);

  if (!additionalEvidenceSubmitted) {
    return {
      claim_id: NORTHSTAR_CLAIM_ID,
      status: "additional_documentation_required" as const,
      request: "Confirm signed proof of delivery and seal number for DC 027.",
    };
  }

  return {
    claim_id: NORTHSTAR_CLAIM_ID,
    status: "approved" as const,
    approved_amount: 42800,
  };
}

export function submitAdditionalEvidence(claimId: string, input: unknown) {
  assertClaimId(claimId);
  if (!isRecord(input)) throw new MockNorthstarError("An evidence payload is required.");

  const expected = {
    document: "Proof_of_Delivery_DC027.pdf",
    seal_number: "S-44719",
    signed_by: "Northstar Receiving",
    receiver: "J. Reynolds",
  } as const;

  for (const [field, value] of Object.entries(expected)) {
    if (input[field] !== value) {
      throw new MockNorthstarError(`Additional evidence field ${field} is missing or incorrect.`);
    }
  }

  return {
    claim_id: NORTHSTAR_CLAIM_ID,
    status: "additional_documentation_received" as const,
    evidence_verified: true,
    seal_number: "S-44719",
  };
}

export function getSettlement(claimId: string) {
  assertClaimId(claimId);
  return {
    claim_id: NORTHSTAR_CLAIM_ID,
    status: "approved_for_recovery" as const,
    amount: 42800,
    reference: NORTHSTAR_CREDIT_REFERENCE,
  };
}

function assertClaimId(claimId: string) {
  if (claimId !== NORTHSTAR_CLAIM_ID) {
    throw new MockNorthstarError("Claim not found.", 404);
  }
}
