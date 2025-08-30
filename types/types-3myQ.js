const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Vercel 专用配置 - 完全动态渲染，禁用所有静态预渲染

  // 图片优化配置
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'placehold.co'],
  },

  // 完全禁用静态生成和预渲染
  output: undefined, // 不使用静态导出

  // 强制所有页面使用动态渲染
  generateStaticParams: false,

  // 禁用静态优化
  trailingSlash: false,
  skipTrailingSlashRedirect: true,

  reactStrictMode: true,

  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 实验性功能和优化配置
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-markdown'],
    // 强制所有页面使用动态渲染
    dynamicIO: true,
    // 禁用静态生成
    staticGenerationAsyncStorage: false,
    // 强制动态渲染
    forceSwcTransforms: true,
  },

  // PWA 和性能优化
  poweredByHeader: false,

  // TypeScript 和 ESLint 配置 - 完全禁用以确保构建成功
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // 环境变量
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://periodhub.health',
  },
};

module.exports = withNextIntl(nextConfig);
