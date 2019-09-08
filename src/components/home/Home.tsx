import React from "react";
import { Container } from "react-bootstrap";

import desk from "../../media/desk-background.jpg";
import Entry from "./entry/Entry";
import Title from "./title/Title";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Social from "./social/Social";
import About from "./about/About";
import Roles from "./roles/Roles";
import Commits from "./commits/Commits";
import History from "./history/History";

const Home: React.FC = () => (
  <>
    <Entry id="home" divider={false} fullscreen backgroundImage={desk}>
      <Title />
    </Entry>
    <Container>
      {/* About */}
      <Entry id="about">
        <About />
      </Entry>
      {/* Roles */}
      <Entry id="roles">
        <Roles />
      </Entry>
      {/* Commits */}
      <Entry id="commits">
        <Commits />
      </Entry>
      {/* History */}
      <Entry id="timeline">
        <History />
      </Entry>
      {/* Projects */}
      <Entry id="projects">
        <Projects />
      </Entry>
      {/* Skills */}
      <Entry id="skills">
        <Skills />
      </Entry>
      {/* Social */}
      <Entry id="social">
        <Social />
      </Entry>
    </Container>
  </>
);

export default Home;
