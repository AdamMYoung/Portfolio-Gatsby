import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import History from './History';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/skills' component={Skills} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/history' exact component={History} />
      <Route path='/contact' exact component={Contact} />

      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
