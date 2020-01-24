import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import Layout from "./Layout";

ReactGA.initialize("UA-140587584-1");

const history = createBrowserHistory();
history.listen(route => ReactGA.pageview(route.pathname));

const App = () => {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
};

export default App;
