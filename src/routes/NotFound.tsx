import React from 'react';
import { Link } from 'react-router-dom';
import { Splash } from '../views/splash/Splash';

export const NotFound = () => {
  return (
    <Splash>
      <h1>Page not found</h1>
      <Link style={{ color: 'white' }} to='/'>
        Back to home
      </Link>
    </Splash>
  );
};
