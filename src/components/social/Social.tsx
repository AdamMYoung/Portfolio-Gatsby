import React, { Component } from "react";
import { Container, Row, Nav } from "react-bootstrap";
import "./Social.css";

export default class Social extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Nav>
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
        </Row>
      </Container>
    );
  }
}
