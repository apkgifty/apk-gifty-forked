/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "placehold.co"],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: true,
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx");

module.exports = withMDX(nextConfig);

module.exports = nextConfig;
