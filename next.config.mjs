/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable build traces (fixes Windows ENOENT .nft.json error with output:export)
  outputFileTracing: false,
  // Suppress experimental warnings
  experimental: {},
};

export default nextConfig;
