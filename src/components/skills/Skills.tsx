import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import Progress from "./Progress";

export default class Skills extends Component {
  render() {
    return (
      <Container fluid className="justify-content-center">
        <Row noGutters>
          <Col>
            <Container fluid style={{ marginBottom: 12 }}>
              <Row noGutters>
                <Col xs={5} md={2}>
                  <p>Languages</p>
                </Col>
                <Col xs={7} md={10}>
                  <p>Proficiency</p>
                </Col>
              </Row>
            </Container>
            <Progress title="C#" progress={80} />
            <Progress title="Java" progress={50} />
            <Progress title="HTML" progress={50} />
            <Progress title="Typescript" progress={50} />
            <Progress title="Kotlin" progress={40} />
            <Progress title="SQL" progress={40} />
            <Progress title="ADA" progress={20} />
          </Col>
        </Row>
      </Container>
    );
  }
}
