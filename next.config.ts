import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['sqlite3', 'sqlite'],
  outputFileTracingIncludes: {
    '/**': ['./printforge.db'],
  },
};

export default nextConfig;
