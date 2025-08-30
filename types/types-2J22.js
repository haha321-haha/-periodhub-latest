// next.config.js
const isStaticExport = process.env.STATIC_EXPORT === "true";

// 调试输出验证环境变量
console.log(`[CONFIG] STATIC_EXPORT=${isStaticExport}`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStaticExport ? "export" : undefined, // 动态切换导出模式
  distDir: isStaticExport ? "out" : ".next", // 显式指定导出目录
  reactStrictMode: true, // 启用严格模式
  images: {
    unoptimized: isStaticExport, // 禁用图像优化（适用于静态导出）
    domains: ["images.unsplash.com"], // 允许的图片域名
  },
  trailingSlash: isStaticExport, // 启用尾部斜杠（仅在静态导出时启用）
  async redirects() {
    if (isStaticExport) {
      return []; // 静态导出模式禁用重定向
    }

    return process.env.NODE_ENV === "production"
      ? [
          {
            source: "/",
            destination: "/directory",
            permanent: false,
          },
        ]
      : [];
  },
};

module.exports = nextConfig;