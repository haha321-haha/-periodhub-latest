// next.config.js
const isStaticExport = process.env.STATIC_EXPORT === "true";

if (isStaticExport) {
    console.log("⚠️ Static Export Mode: Redirects are disabled");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: isStaticExport ? "export" : undefined, // 根据环境变量设置输出模式
    distDir: isStaticExport ? "out" : ".next", // 显式指定导出目录
    reactStrictMode: true, // 启用严格模式
    images: {
        unoptimized: true, // 禁用图像优化（适用于静态导出）
        domains: ["images.unsplash.com"], // 允许的图片域名
    },
    trailingSlash: true, // 启用尾部斜杠
    async redirects() {
        if (isStaticExport) {
            return [];
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