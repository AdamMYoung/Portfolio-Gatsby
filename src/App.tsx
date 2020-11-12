import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

import Layout from './views/Layout';

import './css/main.scss';
import 'devicon/devicon.css';
import 'devicon/devicon-colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { FullScreenProvider } from './providers/FullScreenProvider';

const queryCache = new QueryCache();

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID ?? '');

const history = createBrowserHistory();
history.listen((listener) => {
  ReactGA.pageview(listener.pathname);
});

const App = () => {
  return (
    <FullScreenProvider>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ThemeProvider theme={{ color: { primary: '#deae47' } }}>
          <Router history={history}>
            <Layout />
          </Router>
        </ThemeProvider>
      </ReactQueryCacheProvider>
    </FullScreenProvider>
  );
};

export default App;
