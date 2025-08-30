// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['cdn.example.com'] // 替换为实际图片域名
  },
  // 强制资源路径标准化
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  webpack: (config) => {
    config.resolve.alias = {
      '@components': require('path').resolve(__dirname, 'project/src/components'),
    };
    return config;
  }
};

module.exports = nextConfig;