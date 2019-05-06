import React, { Component } from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./Skills.css";

export default class Skills extends Component {
  render() {
    return (
      <Container fluid className="justify-content-center">
        <Row noGutters>
          <Col>
            <Row noGutters>
              <Col>
                <CardGroup>
                  <Card bg="dark" text="light">
                    <Card.Body>
                      <Card.Title className="role-header">
                        Web Design
                      </Card.Title>
                      <Card.Text>
                        I am well versed in HTML, CSS and JavaScript. I
                        implement these technologies primarily within React,
                        although I'm open to trying new frameworks.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card bg="dark" text="light">
                    <Card.Body>
                      <Card.Title className="role-header">
                        API Development
                      </Card.Title>
                      <Card.Text>
                        I have developed varied APIs within .NET Core within a
                        microservice architecture. These have integrated
                        advanced features such as authentication and API gateway
                        support.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card bg="dark" text="light">
                    <Card.Body>
                      <Card.Title className="role-header">
                        Database Design
                      </Card.Title>
                      <Card.Text>
                        I have designed many different databases, ranging from
                        simple to complex. I have also iterated on previous
                        implementations to improve efficiency and reduce
                        downtime within existing systems.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card bg="dark" text="light">
                    <Card.Body>
                      <Card.Title className="role-header">
                        Deployment
                      </Card.Title>
                      <Card.Text>
                        I have extensive experience with the Microsoft Azure
                        cloud platform, in which I deployed several apps and
                        databases. I have also established CI and CD pipelines
                        within Azure, for automated deployment of applications.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
