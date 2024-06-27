const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    const { isServer } = options;
    const remoteDir = isServer ? 'ssr' : 'chunks';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'softeer-product',
        filename: `static/${remoteDir}/remoteEntry.js`,
        remotes: {
          ['softeer-fo']: `softeer-fo@${process.env.SOFTEER_FO_URL}/_next/static/chunks/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
