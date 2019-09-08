import React from "react";
import { Container } from "react-bootstrap";

import Entry from "./home/entry/Entry";
import Footer from "./navigation/Footer";
import NavBar from "./navigation/NavBar";
import Routes from "./navigation/Routes";

const Layout: React.FC = () => (
  <>
    <NavBar />
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      {/* Navigation Routes */}
      <Routes />

      {/* Footer */}
      <Entry divider={false}>
        <Footer />
      </Entry>
    </Container>
  </>
);

export default Layout;
