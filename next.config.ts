import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack alias (Next.js 16+ default bundler)
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname),
    },
  },
  // Webpack alias (fallback / production builds)
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
};

export default nextConfig;

