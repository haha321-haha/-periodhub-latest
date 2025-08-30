// .eslintrc.cjs

module.exports = {
  root: true, // 确保 ESLint 不继续向上查找其他配置文件
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'next', 'eslint-config-next'],
  rules: {
    'no-unused-vars': 'warn',
    '@next/next/no-img-element': 'off',
  },
  ignorePatterns: ['out/**/*', 'test/**/*'], // 忽略特定目录
};