import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import { Photography } from './Photography';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/photography' exact component={Photography} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
