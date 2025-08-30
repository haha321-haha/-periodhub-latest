// next.config.js
const nextConfig = {
  output: 'export', // 必须启用静态导出
  trailingSlash: true, // 确保生成目录式结构
  images: {
    unoptimized: true, // 静态导出必须禁用图片优化
    // 添加实际使用的图片域名（若需外部图片）
    domains: ['periodhub.health'] 
  },
  // 强制资源路径标准化
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined
};

module.exports = nextConfig;