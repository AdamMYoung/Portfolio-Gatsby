import React from 'react';
import { useFullScreenStatus } from '../providers/FullScreenProvider';
import Routes from '../routes/Routes';
import { Navigation } from './navigation/Navigation';

const Layout: React.FC = () => {
  const { isFullScreen } = useFullScreenStatus();

  return (
    <>
      {!isFullScreen && <Navigation />}
      <Routes />
    </>
  );
};

export default Layout;
