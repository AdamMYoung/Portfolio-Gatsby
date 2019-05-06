import React, { Component } from "react";
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

export default class Layout extends Component {
  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Entry fullscreen backgroundImage={desk}>
          <Title />
        </Entry>
        <Container>
          <Entry>
            <About />
          </Entry>
          <span className="section-divider" />
          <Entry>
            <Roles />
          </Entry>
          <span className="section-divider" />
          <Entry>
            <Commits />
          </Entry>
          <span className="section-divider" />
          <Entry>
            <h2>Projects</h2>
            <Projects />
          </Entry>
          <span className="section-divider" />
          <Entry>
            <h2>Skills</h2>
            <Skills />
          </Entry>
          <span className="section-divider" />
          <Entry height="20h">
            <h2>Social</h2>
            <Social />
          </Entry>
          <span className="section-divider" />
          <p style={{ height: 50, textAlign: "center" }}>
            Website by Adam Young. Created with
            <a href="https://reactjs.org/"> React</a>.
          </p>
        </Container>
      </Container>
    );
  }
}
