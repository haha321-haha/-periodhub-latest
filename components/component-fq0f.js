/​**​ @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": require("path").resolve(__dirname, "./project/src/components"),
    };
    return config;
  },
};

module.exports = nextConfig;