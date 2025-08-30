// eslint.config.js
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    extends: ['next', 'eslint-config-next'],
    ignorePatterns: ['out/**/*', ...(process.env.SKIP_TEST ? ['test/**/*'] : [])],
    plugins: {
      '@next/next': require('@next/eslint-plugin-next'),
    },
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
]);