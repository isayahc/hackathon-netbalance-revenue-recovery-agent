import { NextResponse } from "next/server";

import { buildNormalizedCaseEvidence } from "@/lib/document-ingestion";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { documents, evidence } = await buildNormalizedCaseEvidence();
    return NextResponse.json({
      extracted_at: new Date().toISOString(),
      documents: documents.map(({ id, label, fileName, pageCount, byteLength, sha256 }) => ({
        id,
        label,
        fileName,
        pageCount,
        byteLength,
        sha256,
      })),
      evidence,
    });
  } catch (error) {
    console.error("Evidence ingestion failed", error);
    return NextResponse.json({ error: "Evidence ingestion failed." }, { status: 500 });
  }
}
