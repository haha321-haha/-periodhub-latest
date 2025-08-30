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
      missingSuspenseWithCSRBailout: false, // 禁用 CSR 回退时的警告
    },
  };
  
  module.exports = nextConfig;