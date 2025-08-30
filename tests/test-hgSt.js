/** @type {import('next').NextConfig} */
const nextConfig = {
  // 设置资源前缀
  assetPrefix: '/static',

  // 强制启用静态导出模式
  output: 'export',

  // 确保生成目录式的静态文件
  trailingSlash: true,

  // 图像优化配置
  images: {
    unoptimized: true, // 静态导出时禁用图像优化（适用于静态站点）
    domains: ['cdn.yourdomain.com'], // 替换为您实际使用的图片域名
  },

  // 设置基础路径（适用于部署在子路径的情况）
  basePath: process.env.NODE_ENV === 'production' ? '/magic-system' : '',

  // 实验性功能配置
  experimental: {
    wasm: true, // 启用 WebAssembly 支持
  },

  // 静态页面生成超时时间（单位：秒）
  staticPageGenerationTimeout: 300,

  // ESLint 配置
  eslint: {
    ignoreDuringBuilds: true, // 构建阶段跳过 ESLint 检查（加快构建速度）
  },

  // 生产环境环境变量配置
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://your-site-url.com", // 设置默认站点 URL
  },

  // Webpack 自定义配置
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // 支持 SVG 文件作为 React 组件
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;



