/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ 静态导出模式
  allowedDevOrigins: [
    'http://localhost:3000', // 添加你的本地开发环境地址
    // 如果有其他需要允许的源，可以在这里继续添加
  ],
};

module.exports = nextConfig;