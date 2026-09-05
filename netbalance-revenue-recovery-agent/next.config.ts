import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep pdf-parse and its PDF.js worker together in the serverless function bundle.
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
