import React from "react";
import { Container } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import Entry from "./home/entry/Entry";
import Footer from "./navigation/Footer";
import NavBar from "./navigation/NavBar";
import Routes from "./navigation/Routes";

const Layout: React.FC = () => (
  <>
    <div style={{ height: "6vh" }}>
      <NavBar />
    </div>
    <SimpleBar style={{ height: "94vh" }}>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        {/* Navigation Routes */}

        <Routes />

        {/* Footer */}
        <Entry divider={false}>
          <Footer />
        </Entry>
      </Container>
    </SimpleBar>
  </>
);

export default Layout;
