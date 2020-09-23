import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  height: 97vh;
  width: 100vw;
  padding-top: 50%;
  background: black;
  color: white;
`;

const Home = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Home;
