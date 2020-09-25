import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Projects = () => {
  return (
    <DetailCard title='Projects' description="Side projects I've worked on in my spare time.">
      <Col xs={12}></Col>
    </DetailCard>
  );
};

export default Projects;
