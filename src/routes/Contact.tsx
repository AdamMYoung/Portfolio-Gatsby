import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Contact = () => {
  return (
    <DetailCard title='Contact' description="Pop your details below, and I'll get back to you as soon as possible.">
      <Col xs={12}></Col>
    </DetailCard>
  );
};

export default Contact;
