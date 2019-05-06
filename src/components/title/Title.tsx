import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Title.css";

export default class Title extends Component {
  render() {
    return (
      <Container className="title">
        <Row>
          <Col className="body">
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
