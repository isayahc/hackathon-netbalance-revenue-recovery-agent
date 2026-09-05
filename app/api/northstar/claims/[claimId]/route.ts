import { MockNorthstarError, reviewClaim } from "@/lib/northstar";

type ClaimRouteContext = { params: Promise<{ claimId: string }> };

export async function GET(request: Request, context: ClaimRouteContext) {
  try {
    const { claimId } = await context.params;
    const additionalEvidenceSubmitted = new URL(request.url).searchParams.get("evidence_submitted") === "true";
    return Response.json(reviewClaim(claimId, additionalEvidenceSubmitted));
  } catch (error) {
    if (error instanceof MockNorthstarError) {
      return Response.json({ error: error.message }, { status: error.status });
    }
    console.error("Northstar claim review failed", error);
    return Response.json({ error: "Claim review failed." }, { status: 500 });
  }
}
