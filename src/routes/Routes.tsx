import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/contact' exact component={Contact} />

      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
