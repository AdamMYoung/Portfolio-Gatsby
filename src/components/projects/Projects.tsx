import React, { Component } from "react";
import { Container, Row, CardDeck, Col } from "react-bootstrap";
import listen from "../../media/listen.png";
import create from "../../media/create.png";
import InfoCard from "../elements/card/InfoCard";

export default class Projects extends Component {
  render() {
    return (
      <Container className="center-text">
        <Row>
          <Col>
            <h2>Projects</h2>
            <h6>Some things I've worked on.</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <InfoCard
                title="Vocalia Create"
                description="Vocalia Create is a podcast creation platform writen in React. Features include WebRTC recording, timeline editing and RSS publishing."
                image={create}
                buttonText="View on GitHub"
                buttonLink="https://github.com/AdamMYoung/Vocalia-Create"
              />
              <InfoCard
                title="Vocalia Listen"
                description="Vocalia Listen is a podcast consumption platform written in React. Features include subscription sync, PWA integration and material design."
                image={listen}
                buttonText="View on GitHub"
                buttonLink="https://github.com/AdamMYoung/Vocalia-Listen"
              />
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}
