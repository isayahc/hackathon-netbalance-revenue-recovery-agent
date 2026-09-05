import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PDFParse } from "pdf-parse";

import { evidenceManifest, type EvidenceDocumentId } from "./manifest";

export type IngestedDocument = {
  id: EvidenceDocumentId;
  label: string;
  fileName: string;
  text: string;
  pageCount: number;
  byteLength: number;
  sha256: string;
};

async function ingestDocument(
  entry: (typeof evidenceManifest)[number],
  projectRoot: string,
): Promise<IngestedDocument> {
  const filePath = path.join(projectRoot, "public", "evidence", entry.fileName);
  const data = await readFile(filePath);
  const parser = new PDFParse({ data });

  try {
    const result = await parser.getText();
    const text = result.text.trim();

    if (!text) {
      throw new Error(`${entry.fileName} did not contain extractable text.`);
    }

    return {
      ...entry,
      text,
      pageCount: result.total,
      byteLength: data.byteLength,
      sha256: createHash("sha256").update(data).digest("hex"),
    };
  } finally {
    await parser.destroy();
  }
}

export async function ingestDocuments(projectRoot = process.cwd()): Promise<IngestedDocument[]> {
  return Promise.all(evidenceManifest.map((entry) => ingestDocument(entry, projectRoot)));
}
