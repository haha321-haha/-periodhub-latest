// next.config.js
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['periodhub.health'], 
    formats: ['image/webp'] // ✅ 启用 WebP 格式优化
  },
  // 动态生成静态路由参数
  generateStaticParams: async () => {
    const staticParams = {
      '/magic/1': { pageProps: { id: '1' } },
      '/magic/2': { pageProps: { id: '2' } },
      '/magic/3': { pageProps: { id: '3' } }
    };
    return Object.keys(staticParams);
  },
  // 生产环境优化
  ...(isProduction && {
    compress: true,
    optimizeFonts: true,
    optimizeCss: true
  })
};

module.exports = nextConfig;