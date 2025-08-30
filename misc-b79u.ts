import { getRequestConfig } from 'next-intl/server';
import { requestLocale } from 'next-intl/server';

export default getRequestConfig(async () => {
  // 使用新的 requestLocale API
  const locale = await requestLocale();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
