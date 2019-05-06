import React, { Component } from "react";
import { Container, Row, CardDeck } from "react-bootstrap";
import listen from "../../media/listen.png";
import create from "../../media/create.png";
import ProjectCard from "./ProjectCard";

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Row>
          <CardDeck>
            <ProjectCard
              title="Vocalia Create"
              description="Vocalia Create is a podcast creation platform writen in React. Features include WebRTC recording, timeline editing and RSS publishing."
              src={create}
              link="https://github.com/AdamMYoung/Vocalia-Create"
            />
            <ProjectCard
              title="Vocalia Listen"
              description="Vocalia Listen is a podcast consumption platform written in React. Features include subscription sync, PWA integration and material design."
              src={listen}
              link="https://github.com/AdamMYoung/Vocalia-Listen"
            />
          </CardDeck>
        </Row>
      </Container>
    );
  }
}
