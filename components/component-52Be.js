const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias = {
      '@components': path.resolve(__dirname, 'project/src/components')
    };
    return config;
  }
};

module.exports = nextConfig;
