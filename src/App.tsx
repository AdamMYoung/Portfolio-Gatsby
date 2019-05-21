import React from "react";
import Layout from "./components/Layout";
import ReactGA from "react-ga";

const googleAnalyticsId = "UA-140587584-1";

const App: React.FC = () => {

  ReactGA.initialize(googleAnalyticsId);
  ReactGA.pageview('/home');

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
