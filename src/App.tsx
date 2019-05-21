import React from "react";
import Layout from "./components/Layout";
import ReactGA from "react-ga";

const App: React.FC = () => {

  ReactGA.initialize('UA-140587584-1');
  ReactGA.pageview('/home');

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
