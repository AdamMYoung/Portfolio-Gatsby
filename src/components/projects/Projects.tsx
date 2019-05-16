import React, { Component } from "react";
import { Container, Row, CardDeck, Col, Button } from "react-bootstrap";
import listen from "../../media/listen.png";
import groupr from "../../media/groupr.png";
import InfoCard from "../elements/card/InfoCard";

export default class Projects extends Component {
  render() {
    return (
      <Container className="center-text">
        <Row>
          <Col>
            <h2>Projects</h2>
            <h6>Some things I've worked on.</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <InfoCard
                title="Vocalia"
                description="Vocalia is a platform for consuming and creating podcasts, all within the browser. 
                It features a microservice-based architecture for the back-end, and two SPA React apps for the front-end."
                image={listen}
              >
                <Button
                  variant="primary"
                  href="https://github.com/AdamMYoung/Vocalia-Create"
                >
                  Create - View on GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/AdamMYoung/Vocalia-Listen"
                >
                  Listen - View on GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/AdamMYoung/Vocalia-API"
                >
                  API - View on GitHub
                </Button>
              </InfoCard>
              <InfoCard
                title="Groupr"
                description="A WPF application to add folders to the Windows taskbar. The application uses two separate components, one for managing groups and one for loading folders.
                Folders are selected via startup parameters passed into the folder application, which is then rendered above the taskbar when selected."
                image={groupr}
              >
                <Button
                  variant="primary"
                  href="https://github.com/AdamMYoung/Vocalia-API"
                >
                  View on GitHub
                </Button>
              </InfoCard>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}
