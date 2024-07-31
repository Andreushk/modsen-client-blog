import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Footer, Header } from '@/components';
import { sen } from '@/styles/fonts';

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
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
