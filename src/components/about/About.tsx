import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ paddingTop: 36 }}>
          <Col xs={12} md={4}>
            <h1>About Me</h1>
          </Col>
          <Col xs={12} md={8}>
            <h5>
              I'm Adam Young, a Full-Stack Software Developer who specializes in
              React and .Net Core development.
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
