import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './views/Layout';

import './css/main.scss';
import 'devicon/devicon.css';
import 'devicon/devicon-colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
};

export default App;
