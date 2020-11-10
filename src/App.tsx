import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import Layout from './views/Layout';

import './css/main.scss';
import 'devicon/devicon.css';
import 'devicon/devicon-colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID ?? '');

const history = createBrowserHistory();

history.listen((listener) => {
  ReactGA.pageview(listener.pathname);
});

const App = () => {
  return (
    <ThemeProvider theme={{ color: { primary: '#deae47' } }}>
      <Router history={history}>
        <Layout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
