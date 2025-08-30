import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'zh'] as const;

type Locale = (typeof locales)[number];

function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export default getRequestConfig(async ({ locale }) => {
  // 严格类型校验
  if (!isValidLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../public/locales/${locale}/translation.json`))
      .default,
  };
});

// 导出类型化的语言配置
export type { Locale };
export const availableLocales: readonly Locale[] = locales;
export const defaultLocale: Locale = 'en';
