/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ 静态导出模式
  allowedDevOrigins: [
    'http://localhost:3000', // 允许本地访问
    'http://192.168.8.18:3000', // 允许局域网内其他设备通过你的IP访问
    // 如果有其他需要允许的源，可以在这里继续添加
  ],
};

module.exports = nextConfig;