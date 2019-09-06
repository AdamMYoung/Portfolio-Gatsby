import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../elements/card/InfoCard";
import office from "../../media/office.jpg";
import teesside from "../../media/teesside-uni.jpg";
import laptop from "../../media/code-laptop.png";
import terraquest from "../../media/terraquest-logo.jpg";
import Timeline from "./timeline/Timeline";
import TimelineEntry, { Sides } from "./timeline/TimelineEntry";

const History: React.FC = () => (
  <Container>
    <Row>
      <Col>
        <h2>Timeline</h2>
        <h6>Education and employment history.</h6>
      </Col>
    </Row>
    <Row noGutters>
      <Col>
        <Timeline>
          <TimelineEntry>
            <InfoCard
              title="Teesside University"
              image={teesside}
              subtitle="2015 - 2017"
              description="I began my BSc in Computer Science at Teesside University, located in Middlesbrough, UK."
            />
          </TimelineEntry>
          <TimelineEntry side={Sides.Right}>
            <InfoCard
              title="DuPont Teijin Films"
              image={office}
              subtitle="2017-2018"
              description="My first development role was a placement year at DuPont Teijin Films, where I worked on a variety of internal C# plotting and management
                   applications, managed and maintained database, and provided support across the business."
            />
          </TimelineEntry>
          <TimelineEntry>
            <InfoCard
              title="Final Year"
              image={laptop}
              subtitle="2018-2019"
              description="I started final year where I developed Vocalia, a web-based podcast consumption and creation platform built with .NET Core and React.
                   This won the British Computer Society award during ExpoTees, the university's project exhibition day."
            />
          </TimelineEntry>
          <TimelineEntry side={Sides.Right}>
            <InfoCard
              title="Terraquest Solutions"
              image={terraquest}
              subtitle="2019-Present"
              description="My first graduate role is at Terraquest Solutions, where I work primarily as a front-end 
                React developer on a variety of internal and external applications."
            />
          </TimelineEntry>
        </Timeline>
      </Col>
    </Row>
  </Container>
);

export default History;
