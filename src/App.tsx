import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout";

const googleAnalyticsId = "UA-140587584-1";

const App: React.FC = () => {
  ReactGA.initialize(googleAnalyticsId);
  ReactGA.pageview("/home");

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
