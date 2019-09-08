import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SuspenseFallback from "./SuspenseFallback";

const Home = React.lazy(() => import("../home/Home"));
const Blog = React.lazy(() => import("../blog/Blog"));

const Routes: React.FC = () => (
  <Suspense fallback={<SuspenseFallback />}>
    <Switch>
      <Route path="/blog" component={Blog} />
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  </Suspense>
);

export default Routes;
