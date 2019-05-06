import React, { Component } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

interface IProps {
  title: string;
  progress: number;
}

export default class Progress extends Component<IProps> {
  render() {
    const { title, progress } = this.props;

    return (
      <Container fluid>
        <Row noGutters>
          <Col xs={5} md={2}>
            <p>{title}</p>
          </Col>
          <Col xs={7} md={10}>
            <ProgressBar
              className="Skills-progressBar"
              variant="danger"
              animated
              now={progress}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
