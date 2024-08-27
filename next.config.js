/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "placehold.co",
      "backend.apkxchange.com",
      "plus.unsplash.com",
      "s3-alpha-sig.figma.com",
      "test.apkxchange.com",
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: true,
    mdxRs: true,
    optimizePackageImports: ["framer-motion"],
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
        },
      ],
    });

    return config;
  },
};

const withMDX = require("@next/mdx");

module.exports = withMDX(nextConfig);

module.exports = nextConfig;
