// next.config.js

const isStaticExport = process.env.STATIC_EXPORT === "true";

// 调试输出验证环境变量
console.log(`[CONFIG] Static Export Mode: ${isStaticExport}`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 动态切换导出模式：静态导出时设置为 "export"
  output: isStaticExport ? "export" : undefined,

  // 显式指定导出目录：静态导出时使用 "out"，否则使用默认的 ".next"
  distDir: isStaticExport ? "out" : ".next",

  // 启用严格模式（仅在非静态导出时启用）
  reactStrictMode: !isStaticExport,

  // 图像优化配置
  images: {
    unoptimized: isStaticExport, // 静态导出时禁用图像优化
    domains: ["images.unsplash.com"], // 允许的图片域名
  },

  // 静态页面生成超时时间（单位：秒）
  staticPageGenerationTimeout: 300,

  // 实验性功能配置
  experimental: {
    missingSuspenseWithCSRBailout: false, // 禁用 CSR 回退时的警告
  },

  // 启用尾部斜杠（仅在静态导出时启用）
  trailingSlash: isStaticExport,

  // 重定向配置
  async redirects() {
    if (isStaticExport) {
      return []; // 静态导出模式禁用重定向
    }

    // 生产环境下定义重定向规则
    return process.env.NODE_ENV === "production"
      ? [
          {
            source: "/",
            destination: "/directory", // 默认跳转到 /directory 页面
            permanent: false, // 设置为临时重定向
          },
        ]
      : [];
  },
};

module.exports = nextConfig;