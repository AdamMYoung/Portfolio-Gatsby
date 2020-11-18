import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { useFullScreenStatus } from '../providers/FullScreenProvider';
import { Helmet } from './Helmet';
import { Navigation } from './navigation/Navigation';

import 'devicon/devicon.css';
import 'devicon/devicon-colors.css';
import '../../css/main.scss';

ReactGA.initialize(process.env.GATSBY_GA_TRACKING_ID ?? '');

type Props = {
  title: string;
};

const Layout: React.FC<Props> = (props) => {
  const { isFullScreen } = useFullScreenStatus();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Helmet title={props.title} />
      {!isFullScreen && <Navigation />}
      {props.children}
    </>
  );
};

export default Layout;
