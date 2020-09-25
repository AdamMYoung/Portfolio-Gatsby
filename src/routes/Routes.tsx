import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/skills' component={Skills} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/contact' exact component={Contact} />

      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
