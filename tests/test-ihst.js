// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 强制启用静态导出模式
    output: 'export',
  
    // 图像优化配置
    images: {
      unoptimized: true, // 静态导出时禁用图像优化（适用于静态站点）
      domains: ["images.unsplash.com"], // 允许的图片域名
    },
  
    // 静态页面生成超时时间（单位：秒）
    staticPageGenerationTimeout: 300,
  
    // 实验性功能配置
    experimental: {
      forceSwcTransforms: true, // 强制使用 SWC 转换器以提高构建速度
      strictNextHead: true,     // 严格检查 <head> 标签的使用，避免重复标签
      missingSuspenseWithCSRBailout: false, // 禁用 CSR 回退时的警告
      scrollRestoration: true,  // 启用滚动恢复功能，优化用户体验
    },
  
    // ESLint 配置
    eslint: {
      ignoreDuringBuilds: true, // 构建阶段跳过 ESLint 检查（加快构建速度）
    },
  
    // 压缩配置
    compress: true, // 启用 Gzip/Brotli 压缩以优化资源加载
  
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