// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // needed if you use the /app folder (Next 13+)
  },
};

module.exports = nextConfig;
