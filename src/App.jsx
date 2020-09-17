import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import Layout from "./Layout";

const history = createBrowserHistory();
ReactGA.initialize("UA-140587584-1");

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const App = () => {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
};

export default App;
