import React, { Component } from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";

import InfoCard from "../elements/card/InfoCard";

export default class Roles extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h2>Roles</h2>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <CardGroup>
              <InfoCard
                title="Coding"
                description="I spend the majority of my time writing code. I enjoy
                    exploring new languages and frameworks, and I'm always
                    excited to try the next big thing."
              />
              <InfoCard
                title="Testing"
                description="I test my code through a variety of methods such as unit
                tests, load tests and user experience tests to ensure the
                best result possible."
              />
              <InfoCard
                title="Designing"
                description="I direct a lot of focus on improving the user experience of
                the applications and websites I develop."
              />
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
