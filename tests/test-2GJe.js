// next.config.js

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 强制启用静态导出模式
  output: 'export',

  // 确保生成目录式的静态文件
  trailingSlash: true,

  // 图像优化配置（静态导出必须禁用优化）
  images: {
    unoptimized: true,
  },

  // Webpack 自定义配置（处理 SVG）
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;