import React, { Component } from "react";
import { Container, Row, Nav, Col } from "react-bootstrap";
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
          <Col>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="https://twitter.com/AdamMYoung97">
                  Twitter
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://github.com/ADAMMYOUNG">Github</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/adammichaelyoung/">
                  LinkedIn
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="mailto:adamyoungg97@gmail.com">Email</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}
