import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { AuthenticationContext } from '../../providers/AuthenticationProvider';
import AuthenticatedRoute from './AuthenticatedRoute';

const testProviderValue = { isAuthenticated: true, account: null, onSignIn: () => {}, onSignOut: () => {} };

const TestRoute: React.FC = () => <p>Valid Route!</p>;

describe('authenticated route', () => {
  test('allows authenticated user to view route', () => {
    const history = createMemoryHistory();
    history.push('/test');

    const { getByText } = render(
      <Router history={history}>
        <AuthenticationContext.Provider value={{ ...testProviderValue }}>
          <AuthenticatedRoute path='/test' component={TestRoute} />
        </AuthenticationContext.Provider>
      </Router>
    );

    expect(getByText('Valid Route!')).toBeInTheDocument();
  });

  test('redirects unauthorized to root page if undefined', () => {
    const history = createMemoryHistory();
    history.push('/test');

    render(
      <Router history={history}>
        <AuthenticationContext.Provider value={{ ...testProviderValue, isAuthenticated: false }}>
          <AuthenticatedRoute path='/test' component={TestRoute} />
        </AuthenticationContext.Provider>
      </Router>
    );

    expect(history.location.pathname).toBe('/');
  });

  test('redirects unauthorized to custom fallback', () => {
    const history = createMemoryHistory();
    history.push('/test');

    render(
      <Router history={history}>
        <AuthenticationContext.Provider value={{ ...testProviderValue, isAuthenticated: false }}>
          <AuthenticatedRoute path='/test' component={TestRoute} fallback='/unauthorized' />
        </AuthenticationContext.Provider>
      </Router>
    );

    expect(history.location.pathname).toBe('/unauthorized');
  });

  test('executes fallback function if unauthorized', () => {
    var isFunctionExecuted = false;
    const history = createMemoryHistory();
    history.push('/test');

    render(
      <Router history={history}>
        <AuthenticationContext.Provider value={{ ...testProviderValue, isAuthenticated: false }}>
          <AuthenticatedRoute path='/test' component={TestRoute} fallback={() => (isFunctionExecuted = true)} />
        </AuthenticationContext.Provider>
      </Router>
    );

    expect(isFunctionExecuted).toBe(true);
  });
});
