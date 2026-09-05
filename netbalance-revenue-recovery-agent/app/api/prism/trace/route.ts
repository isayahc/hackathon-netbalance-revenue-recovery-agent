import { emitPrismTrace, type PrismStage } from "@/lib/prism";

export const runtime = "nodejs";

const allowedStages = new Set<PrismStage>([
  "document_ingestion",
  "evidence_reconciliation",
  "evidence_verification",
  "dispute_decision",
  "claim_submission",
  "retailer_response",
  "additional_evidence_response",
  "outcome_verification",
  "completion_evaluation",
]);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      sessionId?: string;
      stage?: PrismStage;
      output?: string;
      latencyMs?: number;
      metadata?: Record<string, string | number | boolean>;
    };

    if (!body.sessionId || !body.stage || !allowedStages.has(body.stage) || !body.output) {
      return Response.json({ error: "Invalid PRISM trace event." }, { status: 400 });
    }

    const result = await emitPrismTrace({
      sessionId: body.sessionId,
      stage: body.stage,
      output: body.output,
      latencyMs: body.latencyMs,
      metadata: body.metadata,
    });
    return Response.json(result, { status: result.sent ? 200 : 202 });
  } catch (error) {
    console.error("PRISM trace delivery failed", error);
    return Response.json({ error: "PRISM trace delivery failed." }, { status: 502 });
  }
}
