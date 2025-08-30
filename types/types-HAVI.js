// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 强制启用静态导出模式
    output: 'export',
  
    // 图像优化配置
    images: {
      unoptimized: true, // 静态导出时禁用图像优化
      domains: ["images.unsplash.com"], // 允许的图片域名
    },
  
    // 静态页面生成超时时间（单位：秒）
    staticPageGenerationTimeout: 300,
  
    // 实验性功能配置
    experimental: {
      forceSwcTransforms: true, // 强制使用 SWC 转换器
      strictNextHead: true,     // 严格检查 <head> 标签的使用
      missingSuspenseWithCSRBailout: false // 禁用 CSR 回退时的警告
    },
  
    // ESLint 配置
    eslint: {
      ignoreDuringBuilds: true // 构建阶段跳过 ESLint 检查
    }
  };
  
  module.exports = nextConfig;