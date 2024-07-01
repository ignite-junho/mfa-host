const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    const { isServer } = options;
    const remoteDir = isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        name: "softeer-product",
        filename: `static/${remoteDir}/remoteEntry.js`,
        remotes: {
          // ["softeer-fo"]: `softeer-fo@http://local-developers.hyundaimotorgroup.com:3000/_next/static/chunks/remoteEntry.js`,
          ["softeer-fo"]: `softeer-fo@https://dev-developers.hyundaimotorgroup.com/_next/static/chunks/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
