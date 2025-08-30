const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  }
};

module.exports = {
  rules: {
    'no-multi-spaces': 'error',
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }]
  }
};