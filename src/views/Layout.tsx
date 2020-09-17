import React from 'react';

import Routes from '../routes/Routes';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';

const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes />
      <Footer />
    </>
  );
};

export default Layout;
