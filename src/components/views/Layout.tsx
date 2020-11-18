import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { useFullScreenStatus } from '../providers/FullScreenProvider';
import { Helmet } from './Helmet';
import { Navigation } from './navigation/Navigation';

import '../../css/main.scss';
import 'devicon/devicon.css';
import 'devicon/devicon-colors.css';

ReactGA.initialize(process.env.GATSBY_GA_TRACKING_ID ?? '');

const Layout: React.FC = (props) => {
  const { isFullScreen } = useFullScreenStatus();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Helmet />
      {!isFullScreen && <Navigation />}
      {props.children}
    </>
  );
};

export default Layout;
