import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Blog = () => {
  return (
    <DetailCard>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Blog</h2>
          </Col>
        </Row>
      </Container>
    </DetailCard>
  );
};

export default Blog;
