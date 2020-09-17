import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../views/home/Home";

const Snippets = React.lazy(() => import("../views/snippets/Snippets"));

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/snippets" exact component={Snippets} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;

Routes.propTypes = {
  color: PropTypes.string
};
