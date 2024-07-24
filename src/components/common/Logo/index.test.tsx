import { render } from '@testing-library/react';

import IntlContextProvider from '@/utils/tests/IntlContextProvider';

import Logo from '.';

describe('Logo component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      <IntlContextProvider>
        <Logo />
      </IntlContextProvider>,
    );
    expect(getByText('Modsen Client Blog')).toBeInTheDocument();
  });
});
