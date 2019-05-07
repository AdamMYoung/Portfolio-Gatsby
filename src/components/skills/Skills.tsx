import React, { Component } from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import "./Skills.css";
import InfoCard from "../elements/card/InfoCard";

export default class Skills extends Component {
  render() {
    return (
      <Container fluid className="justify-content-center">
        <Row noGutters>
          <Col>
            <Row noGutters>
              <Col>
                <CardGroup>
                  <InfoCard
                    title="Web Design"
                    description="I am well versed in HTML, CSS and JavaScript. I
                        implement these technologies primarily within React,
                        although I'm open to trying new frameworks and
                        technologies when they become available."
                  />
                  <InfoCard
                    title="API Development"
                    description="I have developed varied APIs using .NET Core within a
                    microservice architecture. These have integrated
                    advanced features such as authentication and API gateway
                    support."
                  />
                </CardGroup>
                <CardGroup>
                  <InfoCard
                    title="Database Design"
                    description="I have designed many different databases, ranging from
                    simple to complex. I have also iterated on previous
                    implementations to improve efficiency and reduce
                    downtime within existing systems."
                  />
                  <InfoCard
                    title="Deployment"
                    description="I have extensive experience with the Microsoft Azure
                    cloud platform, in which I deployed several apps and
                    databases. I have also established CI and CD pipelines
                    within Azure, for automated deployment of applications."
                  />
                </CardGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
