import createMiddleware from 'next-intl/middleware';

import { DEFAULT_LOCALE, LOCALES } from './constants/i18n';

export default createMiddleware({
  locales: LOCALES,

  defaultLocale: DEFAULT_LOCALE,
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
};
