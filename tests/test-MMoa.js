import next from '@next/eslint-plugin-next';

export default [
  {
    ignores: ['.next/', 'node_modules/', '.sandbox/', 'out/', 'test/']
  },
  {
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
      react: require('eslint-plugin-react'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    rules: {
      semi: ['error', 'always'],
      'no-console': ['warn']
    }
  },
  next.configs['core-web-vitals']
];