export type CompletionCondition = "claim_submitted" | "recovery_verified";

export const demoConfig: {
  completionCondition: CompletionCondition;
  targetRecoveryAmount: number;
} = {
  // Hackathon GIDE change: switch this to "recovery_verified".
  completionCondition: "recovery_verified",
  targetRecoveryAmount: 42_800,
};
