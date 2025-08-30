const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 多平台部署配置 - 支持 Vercel + GitHub Pages + Cloudflare

  // 静态导出配置 (GitHub Pages 需要)
  output: process.env.DEPLOY_TARGET === 'github' ? 'export' : undefined,

  // 基础路径配置 (GitHub Pages 可能需要)
  basePath: process.env.DEPLOY_TARGET === 'github' ? '' : '',

  // 资源前缀配置
  assetPrefix: process.env.DEPLOY_TARGET === 'github' ? '' : '',

  // 图片优化配置
  images: {
    unoptimized: true, // GitHub Pages 和 Cloudflare 兼容性
  },

  // 配置尾部斜杠
  trailingSlash: process.env.DEPLOY_TARGET === 'github' ? true : false,

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

  // TypeScript 和 ESLint 配置
  typescript: {
    ignoreBuildErrors: false, // 启用类型检查
  },

  eslint: {
    ignoreDuringBuilds: false, // 启用 ESLint 检查
  },
};

module.exports = withNextIntl(nextConfig);
