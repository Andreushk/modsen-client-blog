import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';

import { Footer, Header } from '@/components';
import { inter, sen } from '@/styles/fonts';
import { LocaleTypes } from '@/types/locale';

import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout: React.FC<LayoutProps> = ({ children, params }) => {
  const messages = useMessages();
  const locale = useLocale() as LocaleTypes;

  return (
    <html lang={params.locale}>
      <body
        className={`${locale === 'ru' ? inter.className : sen.className} ${locale === 'ru' ? styles.default_letter_spacing : ''}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
