import { verifyEvidence, type EvidenceVerificationInput } from "@/lib/prism/evidence-gate";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = (await request.json()) as EvidenceVerificationInput;
    return Response.json(verifyEvidence(input));
  } catch (error) {
    console.error("PRISM evidence verification failed", error);
    return Response.json({ error: "Invalid evidence verification request." }, { status: 400 });
  }
}
