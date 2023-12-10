/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // modularizeImports: {
  //   "./app/components/buttons/index.ts": {
  //     transform: "./app/components/buttons/{{member}}",
  //     skipDefaultConversion: true,
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};

module.exports = {
  webpack(c) {
    c.module.rules.push({
      test: [/app\/components\/index.ts/i],
      sideEffects: false,
    });

    return c;
  },
  ...withBundleAnalyzer(nextConfig),
};
