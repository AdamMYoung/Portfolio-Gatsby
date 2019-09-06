import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Title: React.FC = () => (
  <Container>
    <Row>
      <Col>
        <div>
          <h1>
            My name is <strong>Adam Young</strong>, I'm a<strong> Software Developer</strong> based in Middlesbrough, UK
          </h1>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Title;
