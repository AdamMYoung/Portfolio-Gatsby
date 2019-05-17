import React, { Component } from "react";
import {
  Container,
  Row,
  CardDeck,
  Col,
  Button,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import listen from "../../media/listen.png";
import groupr from "../../media/groupr.png";
import InfoCard from "../elements/card/InfoCard";
import "./Projects.css";

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
                <DropdownButton id="vocalia-dropdown" title="View on GitHub">
                  <Dropdown.Item href="https://github.com/AdamMYoung/Vocalia-Create">
                    Vocalia Create
                  </Dropdown.Item>
                  <Dropdown.Item href="https://github.com/AdamMYoung/Vocalia-Listen">
                    Vocalia Listen
                  </Dropdown.Item>
                  <Dropdown.Item href="https://github.com/AdamMYoung/Vocalia-API">
                    Vocalia API
                  </Dropdown.Item>
                </DropdownButton>
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
