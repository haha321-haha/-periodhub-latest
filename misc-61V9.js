// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // 默认配置，可以省略
  base: '/', // 默认配置，可以省略
  build: {
    outDir: 'dist', // 输出目录，默认为 'dist'
  },
});