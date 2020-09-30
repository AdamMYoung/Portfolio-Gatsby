import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Routes from '../routes/Routes';
import { ProfileCard } from './card/ProfileCard';
import { Navigation } from './navigation/Navigation';

const Background = styled.div`
  height: 100%;
  background: rgb(207, 95, 25);
  background: linear-gradient(142deg, rgba(207, 95, 25, 1) 0%, rgba(69, 9, 121, 1) 58%, rgba(0, 212, 255, 1) 100%);
`;

const PaddedContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: block;
  }
`;

const TopScreenButton = styled(Button)`
  width: 100%;
  border-radius: 16px;
`;

const Layout: React.FC = () => {
  return (
    <Background>
      <PaddedContainer>
        <Container fluid='lg'>
          {/* Desktop */}
          <Row className='d-none d-lg-flex'>
            <Col xs={12} lg={3} className='mt-3'>
              <ProfileCard />
            </Col>

            <Col xs={12} lg={9} className='mt-3'>
              <Routes />
            </Col>
          </Row>

          {/* Mobile */}
          <Row className='d-flex d-lg-none'>
            <Col xs={12} lg={3} className='mt-3'>
              <ProfileCard />
            </Col>

            <Navigation />

            <Col xs={12} lg={9} className='mt-3'>
              <Routes />
            </Col>
          </Row>

          <Row className='mt-4 pb-4 d-none d-lg-flex justify-content-center'>
            <Navigation />
          </Row>
          <Row className='mt-4 pb-4 d-flex d-lg-none justify-content-center'>
            <Col xs={12}>
              <TopScreenButton variant='light' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                Back to top
              </TopScreenButton>
            </Col>
          </Row>
        </Container>
      </PaddedContainer>
    </Background>
  );
};

export default Layout;
