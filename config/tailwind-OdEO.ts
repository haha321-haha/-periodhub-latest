// tailwind.config.ts
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/​**​/*.{js,ts,jsx,tsx}',    // 新增 app 目录扫描
    './project/src/​**​/*.{js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'] // 匹配全局字体
      }
    }
  },
  plugins: [animate, typography]
};

export default config;