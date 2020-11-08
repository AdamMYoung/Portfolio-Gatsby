import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Routes from '../routes/Routes';
import { ProfileCard } from './card/ProfileCard';
import { Navigation } from './navigation/Navigation';
import { Section } from './section/Section';
import { Splash } from './splash/Splash';

const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Splash />

      <Section title='Skills' variant='dark'>
        Text
      </Section>

      <Section title='Skills' variant='light'>
        Text
      </Section>

      {/* Desktop
        <Row className='d-none d-lg-flex'>
          <Col xs={12} lg={3} className='mt-3'>
            <ProfileCard />
          </Col>

          <Col xs={12} lg={9} className='mt-3'>
            <Routes />
          </Col>
        </Row> */}
    </>
  );
};

export default Layout;
