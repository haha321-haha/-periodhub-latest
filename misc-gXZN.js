// next.config.js

const nextConfig = {
  output: 'export', // ✅ 静态导出模式
  trailingSlash: true, // ✅ 目录式 URL
  images: {
    unoptimized: true, // ✅ 禁用图片优化
    domains: ['periodhub.health'] // ✅ 允许加载外部图片
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined, // ✅ 生产环境资源路径
  async redirects() {
    return [
      {
        source: '/',
        destination: '/magic/1',
        permanent: false // ✅ 302 临时重定向
      }
    ];
  }
};

module.exports = nextConfig;