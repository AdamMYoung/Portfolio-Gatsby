import React, { useContext } from 'react';
import { render } from '@testing-library/react';

import { AuthenticationContext } from './AuthenticationProvider';

const TestConsumer: React.FC = () => {
  const authContext = useContext(AuthenticationContext);

  return (
    <div>
      <p>Authenticated: {authContext.isAuthenticated.toString()}</p>
      <p>Account: {JSON.stringify(authContext.account)}</p>
    </div>
  );
};

describe('authentication provider', () => {
  test('consumer shows default values', () => {
    const { getByText } = render(
      <div>
        <TestConsumer />
      </div>
    );

    expect(getByText(/Authenticated:/).textContent).toBe('Authenticated: false');
    expect(getByText(/Account:/).textContent).toBe('Account: null');
  });

  test('consumer shows value from provider', () => {
    const { getByText } = render(
      <div>
        <AuthenticationContext.Provider
          value={{
            isAuthenticated: true,
            account: { firstName: 'John', lastName: 'Doe' },
            onSignIn: () => {},
            onSignOut: () => {}
          }}
        >
          <TestConsumer />
        </AuthenticationContext.Provider>
      </div>
    );

    expect(getByText(/Authenticated:/).textContent).toBe('Authenticated: true');
    expect(getByText(/Account:/).textContent).toBe('Account: {"firstName":"John","lastName":"Doe"}');
  });
});
