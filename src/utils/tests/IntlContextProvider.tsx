import { IntlProvider } from 'next-intl';

const IntlContextProvider = ({ children }: { children: React.ReactNode }) => (
  <IntlProvider locale="en" messages={{}}>
    {children}
  </IntlProvider>
);

export default IntlContextProvider;
