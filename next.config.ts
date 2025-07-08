import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repo = 'ai-landing'; // your repo name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },
};

export default nextConfig;
