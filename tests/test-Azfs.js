/** @type {import('eslint').Linter.Config} */
export default {
    extends: ['next/core-web-vitals'], // 继承 Next.js 推荐配置
    ignorePatterns: ['.next/', 'node_modules/', '.sandbox/', 'out/', 'test/'], // 替代 .eslintignore
    languageOptions: {
      ecmaVersion: 2023, // 使用最新的 ECMAScript 版本
      sourceType: 'module',
      globals: {
        AudioWorkletGlobalScope: true, // 修正了多余的空格问题
      },
    },
    rules: {
      semi: ['error', 'always'],
      // 其他自定义规则...
    },
  };