import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Title extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <h1>
                My name is <strong>Adam Young</strong>, I'm a
                <strong> Software Developer</strong> based in Middlesbrough, UK
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
