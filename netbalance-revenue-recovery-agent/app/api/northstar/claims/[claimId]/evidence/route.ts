import { MockNorthstarError, submitAdditionalEvidence } from "@/lib/northstar";

type EvidenceRouteContext = { params: Promise<{ claimId: string }> };

export async function POST(request: Request, context: EvidenceRouteContext) {
  try {
    const { claimId } = await context.params;
    return Response.json(submitAdditionalEvidence(claimId, await request.json()));
  } catch (error) {
    if (error instanceof MockNorthstarError) {
      return Response.json({ error: error.message }, { status: error.status });
    }
    console.error("Northstar evidence submission failed", error);
    return Response.json({ error: "Evidence submission failed." }, { status: 500 });
  }
}
