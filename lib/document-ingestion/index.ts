import { extractCaseEvidence } from "./extract";
import { ingestDocuments } from "./ingest";

export { EvidenceExtractionError, extractCaseEvidence } from "./extract";
export { ingestDocuments } from "./ingest";
export { evidenceManifest } from "./manifest";
export type { NormalizedCaseEvidence } from "./extract";
export type { IngestedDocument } from "./ingest";

export async function buildNormalizedCaseEvidence(projectRoot = process.cwd()) {
  const documents = await ingestDocuments(projectRoot);
  return {
    documents,
    evidence: extractCaseEvidence(documents),
  };
}
