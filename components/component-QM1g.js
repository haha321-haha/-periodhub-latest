// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 设置开发服务器端口
  },
  build: {
    outDir: 'dist', // 输出目录
    rollupOptions: {
      input: 'src/main.tsx', // 明确指定入口文件
    },
  },
});