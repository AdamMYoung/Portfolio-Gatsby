import React from "react";
import { Container, Row, CardDeck, Col, Button, Dropdown } from "react-bootstrap";

import listen from "../../static/listen.png";
import groupr from "../../static/groupr.png";
import InfoCard from "../components/cards/InfoCard";

const Projects = () => (
  <Container className="center-text" style={{ marginTop: 12 }}>
    <Row>
      <Col>
        <CardDeck>
          <InfoCard
            title="Vocalia"
            description="Vocalia is a platform for consuming and creating podcasts, all within the browser. 
            It features a microservice-based architecture for the back-end, and two SPA React apps for the front-end."
            image={listen}
          >
            <Dropdown block={"true"}>
              <Dropdown.Toggle block variant="outline-light">
                View on GitHub
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "100%" }}>
                <Dropdown.Item href="https://github.com/AdamMYoung/Vocalia-Create">Vocalia Create</Dropdown.Item>
                <Dropdown.Item href="https://github.com/AdamMYoung/Vocalia-Listen">Vocalia Listen</Dropdown.Item>
                <Dropdown.Item href="https://github.com/AdamMYoung/Vocalia-API">Vocalia API</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InfoCard>
          <InfoCard
            title="Groupr"
            description="A WPF application to add folders to the Windows taskbar. The application uses two separate components, one for managing groups and one for loading folders.
            Folders are selected via startup parameters passed into the folder application, which is then rendered above the taskbar when selected."
            image={groupr}
          >
            <Button variant="outline-light" href="https://github.com/AdamMYoung/Groupr">
              View on GitHub
            </Button>
          </InfoCard>
        </CardDeck>
      </Col>
    </Row>
  </Container>
);

export default Projects;
