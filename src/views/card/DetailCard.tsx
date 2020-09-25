import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type Props = {
  title: string;
  description: string;
};

export const DetailCard: React.FC<Props> = (props) => {
  const { title, description, children } = props;

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Col>
      </Row>
      <Row>{children}</Row>
    </Container>
  );
};
