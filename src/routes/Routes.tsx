import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Projects from './Projects';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/projects' exact component={Projects} />

      <Route path='/' component={NotFound} />
    </Switch>
  );
};

export default Routes;
