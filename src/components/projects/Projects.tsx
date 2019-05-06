import React, { Component } from "react";
import { Container, Row, CardDeck, Col } from "react-bootstrap";
import listen from "../../media/listen.png";
import create from "../../media/create.png";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <Container className="center-text">
        <Row>
          <Col>
            <h6>Here's a few projects I've recently worked on.</h6>
          </Col>
        </Row>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    );
  }
}
