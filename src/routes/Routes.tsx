import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import { NotFound } from './NotFound';
import { Photography } from './photography/Photography';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/photography' component={Photography} />
      <Route path='/page-not-found' component={NotFound} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
