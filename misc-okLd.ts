import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'zh',

  // Always show the locale in the URL
  localePrefix: 'always',

  // Redirect to default locale when accessing root
  localeDetection: true
});

export const config = {
  matcher: [
    // 匹配所有路径，除了静态文件和API路由
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // 匹配根路径
    '/'
  ]
};
