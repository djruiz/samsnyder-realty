const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
<<<<<<< HEAD
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }
}
=======
    unoptimized: true,
  },
};
>>>>>>> 1e404249532ac6ecc98f6f9c03a882adf8c4feed

module.exports = nextConfig;
