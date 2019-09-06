import React from "react";
import { Container } from "react-bootstrap";
import Entry from "./entry/Entry";
import Title from "./title/Title";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Social from "./social/Social";
import desk from "../media/desk-background.jpg";
import About from "./about/About";
import Roles from "./roles/Roles";
import Commits from "./commits/Commits";
import History from "./history/History";

const Layout: React.FC = () => (
  <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Entry fullscreen backgroundImage={desk}>
      <Title />
    </Entry>
    <Container>
      {/* About */}
      <Entry>
        <About />
      </Entry>
      <span className="section-divider" />
      {/* Roles */}
      <Entry>
        <Roles />
      </Entry>
      <span className="section-divider" />
      {/* Commits */}
      <Entry>
        <Commits />
      </Entry>
      <span className="section-divider" />
      {/* History */}
      <Entry>
        <History />
      </Entry>
      <span className="section-divider" />
      {/* Projects */}
      <Entry>
        <Projects />
      </Entry>
      <span className="section-divider" />
      {/* Skills */}
      <Entry>
        <Skills />
      </Entry>
      <span className="section-divider" />
      {/* Social */}
      <Entry>
        <Social />
      </Entry>
      <span className="section-divider" />
      <Entry>
        <div style={{ marginBottom: 36 }}>
          <p>
            Website by Adam Young. Created with
            <a href="https://reactjs.org/"> React</a>
          </p>
          <p>
            Find the source code
            <a href="https://github.com/AdamMYoung/Portfolio"> here</a>
          </p>
        </div>
      </Entry>
    </Container>
  </Container>
);

export default Layout;
