import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../views/home/Home";
import Blog from "../views/blog/Blog";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/blog" component={Blog} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;

Routes.propTypes = {
  color: PropTypes.string
};
