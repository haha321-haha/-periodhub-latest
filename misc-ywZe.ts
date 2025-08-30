// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our site",
      "description": "This is a multilingual application",
      "about": "About Us",
      "contact": "Contact",
      "settings": "Settings"
    }
  },
  zh: {
    translation: {
      "welcome": "欢迎访问我们的网站",
      "description": "这是一个多语言应用",
      "about": "关于我们",
      "contact": "联系我们",
      "settings": "设置"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // 默认语言
    fallbackLng: "en", // 回退语言
    interpolation: {
      escapeValue: false // 不要转义HTML
    }
  });

export default i18n;