// eslint.config.js
import next from '@eslint/compat';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import js from '@eslint/js';

export default tseslint.config(
  { ignores: ['.next/', 'node_modules/', '.sandbox/', 'out/', 'test/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        AudioWorkletGlobalScope: true,
        browser: true,
        es2021: true,
        node: true
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      semi: ['error', 'always'],
      'no-console': ['warn']
    }
  },
  next.configs['core-web-vitals']
);