// eslint.config.js
import { defineConfig } from 'eslint/config';
import nextEslint from 'eslint-config-next';

export default defineConfig([
  {
    // 继承 Next.js 默认规则
    extends: ['next', 'eslint-config-next'],
    // 动态忽略构建目录
    ignorePatterns: ['out/**/*', ...(process.env.SKIP_TEST ? ['test/**/*'] : [])],
    // 如果需要添加插件，可以在这里指定
    plugins: {
      '@next/next': require('@next/eslint-plugin-next'),
    },
  },
]);