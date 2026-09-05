import { createClaim, MockNorthstarError } from "@/lib/northstar";

export async function POST(request: Request) {
  try {
    return Response.json(createClaim(await request.json()), { status: 201 });
  } catch (error) {
    if (error instanceof MockNorthstarError) {
      return Response.json({ error: error.message }, { status: error.status });
    }
    console.error("Northstar claim submission failed", error);
    return Response.json({ error: "Claim submission failed." }, { status: 500 });
  }
}
