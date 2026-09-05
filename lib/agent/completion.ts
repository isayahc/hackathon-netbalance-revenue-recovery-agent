import type { CompletionCondition } from "@/config/demo";

export type CompletionResult = {
  complete: boolean;
  technicalSuccess: boolean;
  businessGoalAchieved: boolean;
  recoveredAmount: number;
};

type CompletionSnapshot = {
  claimSubmitted: boolean;
  settlementStatus?: string;
  approvedAmount?: number;
};

export function evaluateCompletion(
  condition: CompletionCondition,
  snapshot: CompletionSnapshot,
  targetRecoveryAmount: number,
): CompletionResult {
  const technicalSuccess = snapshot.claimSubmitted;
  const businessGoalAchieved =
    snapshot.settlementStatus === "approved_for_recovery" &&
    snapshot.approvedAmount === targetRecoveryAmount;

  return {
    complete: condition === "claim_submitted" ? technicalSuccess : businessGoalAchieved,
    technicalSuccess,
    businessGoalAchieved,
    recoveredAmount: businessGoalAchieved ? targetRecoveryAmount : 0,
  };
}
