/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "placehold.co"],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
