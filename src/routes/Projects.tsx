import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Projects = () => {
  return (
    <DetailCard>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Projects</h2>
          </Col>
        </Row>
      </Container>
    </DetailCard>
  );
};

export default Projects;
