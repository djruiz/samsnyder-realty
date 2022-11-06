const path = require("path");
const { loadEnvConfig } = require("@next/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  basePath: loadEnvConfig(".").combinedEnv.NEXT_PUBLIC_BASE_PATH,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  }
}

module.exports = nextConfig;
