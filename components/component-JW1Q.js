const path = require('path');

/​**​ @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias = {
      '@components': path.resolve(__dirname, './project/src/components'),
      '@app': path.resolve(__dirname, './app'),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;