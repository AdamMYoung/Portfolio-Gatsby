import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Home = () => {
  return (
    <DetailCard title='About Me' description='A short description of my work and hobbies.'>
      <Col xs={12}></Col>
    </DetailCard>
  );
};

export default Home;
