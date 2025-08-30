import { getRequestConfig } from 'next-intl/server';
import { requestLocale } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await requestLocale();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
