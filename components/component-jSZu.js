// next.config.js
const path = require('path');

/​**​ @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config) => {
    // 关键修正：精确指向 components 目录
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, './project/src/components'),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;