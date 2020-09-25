import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Contact = () => {
  return (
    <DetailCard>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Contact</h2>
          </Col>
        </Row>
      </Container>
    </DetailCard>
  );
};

export default Contact;
