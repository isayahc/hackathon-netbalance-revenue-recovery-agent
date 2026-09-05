import { readFile, readdir } from "node:fs/promises";
import { extname, relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";

const CONTENT_TYPES = {
  ".csv": "text/csv",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".txt": "text/plain",
};

function getConfig(overrides = {}) {
  const url = (overrides.url ?? process.env.SUPABASE_URL ?? "").replace(/\/$/, "");
  const key = overrides.serviceRoleKey ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = overrides.bucket ?? process.env.SUPABASE_STORAGE_BUCKET ?? "documents";

  if (!url) throw new Error("SUPABASE_URL is not set");
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  if (!bucket) throw new Error("A Supabase Storage bucket is required");

  return { url, key, bucket };
}

function storageObjectUrl(config, objectPath) {
  const encodedBucket = encodeURIComponent(config.bucket);
  const encodedPath = objectPath.split("/").map(encodeURIComponent).join("/");
  return `${config.url}/storage/v1/object/${encodedBucket}/${encodedPath}`;
}

export async function uploadDocument(filePath, { rootDir, ...overrides } = {}) {
  const config = getConfig(overrides);
  const absoluteFilePath = resolve(filePath);
  const relativePath = relative(resolve(rootDir ?? "."), absoluteFilePath)
    .split(sep)
    .join("/");
  const body = await readFile(absoluteFilePath);
  const response = await fetch(storageObjectUrl(config, relativePath), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.key}`,
      apikey: config.key,
      "Content-Type": CONTENT_TYPES[extname(absoluteFilePath).toLowerCase()] ?? "application/octet-stream",
      "x-upsert": "true",
    },
    body,
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase upload failed for ${relativePath} (${response.status}): ${details}`);
  }

  return {
    source: absoluteFilePath,
    bucket: config.bucket,
    path: relativePath,
    url: storageObjectUrl(config, relativePath),
  };
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(entryPath));
    else if (entry.isFile()) files.push(entryPath);
  }
  return files.sort();
}

export async function ingestDocuments(directory, options = {}) {
  const rootDir = resolve(directory);
  const files = await collectFiles(rootDir);
  const uploaded = [];
  for (const filePath of files) {
    uploaded.push(await uploadDocument(filePath, { ...options, rootDir }));
  }
  return uploaded;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const directory = process.argv[2];
  if (!directory) {
    console.error("Usage: npm run ingest -- <directory>");
    process.exitCode = 1;
  } else {
    ingestDocuments(directory)
      .then((result) => console.log(JSON.stringify({ uploaded: result }, null, 2)))
      .catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
      });
  }
}
