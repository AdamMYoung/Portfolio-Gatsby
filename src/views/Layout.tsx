import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import mobile from 'is-mobile';

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
  margin-left: 48px;
  margin-right: 48px;

  @media (max-width: 576px) {
    display: block;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const Layout: React.FC = () => {
  const isMobile = mobile();

  return (
    <Background>
      <PaddedContainer>
        <Container>
          <Row>
            <Col xs={12} sm={4} md={3} className='mt-3'>
              <ProfileCard />
            </Col>

            {isMobile && <Navigation />}
            <Col xs={12} sm={8} md={9} className='mt-3'>
              <Routes />
            </Col>
          </Row>

          {!isMobile && (
            <Row className='mt-4 pb-4'>
              <Navigation />
            </Row>
          )}
        </Container>
      </PaddedContainer>
    </Background>
  );
};

export default Layout;
