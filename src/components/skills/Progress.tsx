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
          <Col xs={6} md={2} lg={1}>
            <p>{title}</p>
          </Col>
          <Col xs={6} md={10} lg={11}>
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
