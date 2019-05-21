import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Social.css";

export default class Social extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Social</h2>
            <h6>Where you can usually find me.</h6>
          </Col>
        </Row>
        <Row>
          <Col className="justify-content-center list-elements">
            <a href="https://twitter.com/AdamMYoung_" title="Twitter">
              <i className="fab fa-twitter-square fa-3x" />
            </a>
            <a
              href="https://www.linkedin.com/in/adammichaelyoung/"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin fa-3x" />
            </a>
            <a href="https://github.com/ADAMMYOUNG" title="Github">
              <i className="fab fa-github-square fa-3x" />
            </a>
            <a href="mailto:adamyoungg97@gmail.com" title="Email">
              <i className="fas fa-envelope-square fa-3x" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
