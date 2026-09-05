import { getSettlement, MockNorthstarError } from "@/lib/northstar";

type SettlementRouteContext = { params: Promise<{ claimId: string }> };

export async function GET(_request: Request, context: SettlementRouteContext) {
  try {
    const { claimId } = await context.params;
    return Response.json(getSettlement(claimId));
  } catch (error) {
    if (error instanceof MockNorthstarError) {
      return Response.json({ error: error.message }, { status: error.status });
    }
    console.error("Northstar settlement lookup failed", error);
    return Response.json({ error: "Settlement lookup failed." }, { status: 500 });
  }
}
