import { analyzeRecoveryCase } from "@/lib/agent";
import { buildNormalizedCaseEvidence } from "@/lib/document-ingestion";

export const runtime = "nodejs";

export async function POST() {
  try {
    const { evidence } = await buildNormalizedCaseEvidence();
    return Response.json(analyzeRecoveryCase(evidence));
  } catch (error) {
    console.error("Recovery analysis failed", error);
    return Response.json({ error: "Recovery analysis failed." }, { status: 500 });
  }
}
