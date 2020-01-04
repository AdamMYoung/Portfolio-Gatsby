import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../views/home/Home";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;

Routes.propTypes = {
  color: PropTypes.string
};
