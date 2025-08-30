// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true,
    domains: ['cdn.yourdomain.com'] 
  },
  // 子路径部署配置（按需启用）
  // basePath: '/your-subpath',
  webpack: (config) => {
    config.resolve.alias = {
      '@components': require('path').resolve(__dirname, 'project/src/components'),
    };
    return config;
  }
};

module.exports = nextConfig;