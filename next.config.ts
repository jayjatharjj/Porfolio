import type { NextConfig } from "next";

// The site is served from https://<user>.github.io/Porfolio/ on GitHub Pages,
// so CI sets NEXT_PUBLIC_BASE_PATH=/Porfolio. Locally it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
