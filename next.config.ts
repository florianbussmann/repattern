import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  basePath,
  assetPrefix,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/f/all',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
