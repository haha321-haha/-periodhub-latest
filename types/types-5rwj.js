const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Vercel 部署配置 (支持服务器端功能)
  // output: 'export', // 移除静态导出以支持动态功能

  // 图片优化配置
  images: {
    unoptimized: true, // 保持禁用以提高兼容性
  },

  // 配置尾部斜杠
  trailingSlash: true,

  // 基础路径
  basePath: '',
  assetPrefix: '',

  reactStrictMode: true,

  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 实验性功能
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-markdown'],
  },

  // PWA 和性能优化
  poweredByHeader: false,

  // 构建配置
  typescript: {
    ignoreBuildErrors: false, // 启用类型检查
  },

  eslint: {
    ignoreDuringBuilds: false, // 启用 ESLint
  },

  // 环境变量
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://periodhub.health',
  },

  // 支持的功能（Vercel 部署）：
  // ✅ headers()
  // ✅ redirects()
  // ✅ rewrites()
  // ✅ API Routes
  // ✅ Middleware
  // ✅ Server-side Internationalization
};

module.exports = withNextIntl(nextConfig);
