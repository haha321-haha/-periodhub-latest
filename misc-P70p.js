// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    // 添加实际使用的图片域名（若需外部图片）
    domains: ['periodhub.health'] 
  },
  // 强制资源路径标准化
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined
};

module.exports = nextConfig;