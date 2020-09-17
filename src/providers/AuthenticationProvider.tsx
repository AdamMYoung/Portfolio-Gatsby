import React from 'react';

type AuthenticationProperties = {
  isAuthenticated: boolean;
  account: object | null;
  onSignIn: () => void;
  onSignOut: () => void;
};

export const AuthenticationContext = React.createContext<AuthenticationProperties>({
  isAuthenticated: false,
  account: null,
  onSignIn: () => {},
  onSignOut: () => {}
});

const AuthenticationProvider: React.FC = props => {
  // Desired authentication info should be provided here.
  const authStatus = {
    isAuthenticated: false,
    account: null,
    onSignIn: () => {},
    onSignOut: () => {}
  };

  return <AuthenticationContext.Provider value={authStatus}>{props.children}</AuthenticationContext.Provider>;
};

export default AuthenticationProvider;
