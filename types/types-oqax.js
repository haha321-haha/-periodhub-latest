echo "/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  trailingSlash: true,
  async redirects() {
    return process.env.NODE_ENV === 'production' ? [
      {
        source: '/',
        destination: '/directory',
        permanent: false
      }
    ] : [];
  }
};
module.exports = nextConfig;" > next.config.js