import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  // 基础配置：继承 Next.js 和 Core Web Vitals 的推荐规则
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    extends: ["next", "next/core-web-vitals"],
    plugins: {
      "@next/next": require("@next/eslint-plugin-next"), // 添加 Next.js 插件
    },
  },

  // JavaScript 推荐规则
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // 配置全局变量（浏览器环境）
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // React 推荐规则
  pluginReact.configs.flat.recommended,
]);