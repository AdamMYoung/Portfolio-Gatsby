import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import mobile from 'is-mobile';

import Routes from '../routes/Routes';
import { ProfileCard } from './card/ProfileCard';
import { Navigation } from './navigation/Navigation';
import { Card } from './card/Card';

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
  const isMobile = mobile();

  return (
    <Background>
      <PaddedContainer>
        <Container fluid="lg">
          <Row>
            <Col xs={12} md={3} className='mt-3'>
              <ProfileCard />
            </Col>

            {isMobile && <Navigation />}

            <Col xs={12} md={9} className='mt-3'>
              <Card className='py-4 px-0'>
                <Routes />
              </Card>
            </Col>
          </Row>

          <Row className='mt-4 pb-4 justify-content-center'>
            {!isMobile ? (
              <Navigation />
            ) : (
              <Col xs={12}>
                <TopScreenButton
                  variant='light'
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                >
                  Back to top
                </TopScreenButton>
              </Col>
            )}
          </Row>
        </Container>
      </PaddedContainer>
    </Background>
  );
};

export default Layout;
