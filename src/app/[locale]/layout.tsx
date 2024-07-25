import '@/styles/reset.scss';
import '@/styles/global.scss';

import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Header } from '@/components';
import { sen } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Client Blog App',
  description:
    'Read interesting articles and updates on our blog. Stay informed with the latest news, tips, and guides on trending topics.',
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout: React.FC<LayoutProps> = ({ children, params }) => {
  const messages = useMessages();
  return (
    <html lang={params.locale}>
      <body className={sen.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
