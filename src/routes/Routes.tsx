import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import mobile from 'is-mobile';

import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

const Routes = () => {
  const isMobile = mobile();

  const RouteSwitcher: React.FC = ({ children }) =>
    isMobile ? (
      <Switch>{children}</Switch>
    ) : (
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className='switch-wrapper'
      >
        {children}
      </AnimatedSwitch>
    );

  return (
    <RouteSwitcher>
      <Route path='/' exact component={Home} />
      <Route path='/skills' component={Skills} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/contact' exact component={Contact} />

      <Redirect to='/' />
    </RouteSwitcher>
  );
};

export default Routes;
