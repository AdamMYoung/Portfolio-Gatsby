import React, { Component } from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./Roles.css";

export default class Roles extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h2>My Roles Include...</h2>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <CardGroup>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title className="role-header">Coding</Card.Title>
                  <Card.Text>
                    I spend the majority of my time writing code. I enjoy
                    exploring new languages and frameworks, and I'm always
                    excited to try the next big thing.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title className="role-header">Testing</Card.Title>
                  <Card.Text>
                    I test my code through a variety of methods such as unit
                    tests, load tests and user experience tests to ensure the
                    best result possible.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title className="role-header">Designing</Card.Title>
                  <Card.Text>
                    I direct a lot of focus on improving the user experience of
                    the applications and websites I develop.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
