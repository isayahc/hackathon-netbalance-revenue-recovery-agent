import test from "node:test";
import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ingestDocuments } from "./supabase-document-ingest.mjs";

test("uploads files recursively while preserving relative paths", async () => {
  const rootDir = await mkdtemp(join(tmpdir(), "netbalance-ingest-"));
  const originalFetch = globalThis.fetch;
  const requests = [];
  process.env.SUPABASE_URL = "https://example.supabase.co/";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-key";
  globalThis.fetch = async (url, options) => {
    requests.push({ url, options });
    return new Response("{}", { status: 200 });
  };

  try {
    await writeFile(join(rootDir, "invoice.pdf"), "invoice");
    await mkdir(join(rootDir, "nested"));
    await writeFile(join(rootDir, "nested", "notes.txt"), "notes");
    const result = await ingestDocuments(rootDir, { bucket: "case files" });

    assert.deepEqual(result.map((file) => file.path), ["invoice.pdf", "nested/notes.txt"]);
    assert.equal(requests[0].url, "https://example.supabase.co/storage/v1/object/case%20files/invoice.pdf");
    assert.equal(requests[0].options.headers.Authorization, "Bearer test-service-key");
    assert.equal(requests[0].options.headers["Content-Type"], "application/pdf");
    assert.equal(requests[0].options.headers["x-upsert"], "true");
  } finally {
    globalThis.fetch = originalFetch;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    await rm(rootDir, { recursive: true, force: true });
  }
});
