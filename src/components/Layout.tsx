import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Entry from "./entry/Entry";
import Title from "./title/Title";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Social from "./social/Social";
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <Container>
        <Entry>
          <Title />
        </Entry>
        <Entry>
          <h2 className="Layout-entry">Skills</h2>
          <Skills />
        </Entry>
        <Entry>
          <h2 className="Layout-entry">Projects</h2>
          <Projects />
        </Entry>
        <Entry>
          <h2 className="Layout-entry">Social</h2>
          <Social />
        </Entry>
      </Container>
    );
  }
}
