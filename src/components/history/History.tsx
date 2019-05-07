import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../elements/card/InfoCard";
import dupont from "../../media/dupont.png";
import teesside from "../../media/teesside-uni.jpg";
import laptop from "../../media/code-laptop.png";
import Timeline from "./timeline/Timeline";
import TimelineEntry, { Sides } from "./timeline/TimelineEntry";

export default class History extends Component {
  render() {
    return (
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
                  image={dupont}
                  subtitle="2017-2018"
                  description="I started a placement year at DuPont Teijin Films, where I worked on a variety of C# plotting and management applications."
                />
              </TimelineEntry>
              <TimelineEntry>
                <InfoCard
                  title="Final Year"
                  image={laptop}
                  subtitle="2018-2019"
                  description="I started final year, where I developed Vocalia, a web-based podcast consumption and creation platform built with .NET Core and React."
                />
              </TimelineEntry>
            </Timeline>
          </Col>
        </Row>
      </Container>
    );
  }
}
