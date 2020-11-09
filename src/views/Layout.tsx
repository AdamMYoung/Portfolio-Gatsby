import { faAddressCard, faBookOpen, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

import { Navigation } from './navigation/Navigation';
import { Section } from './section/Section';
import { Splash } from './splash/Splash';

const Description = styled.p`
  font-weight: light;
  font-size: 1.5rem;
`;

const Email = styled.a`
  font-size: 1.75rem;
  cursor: pointer;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color.primary};

  &:focus {
    color: ${(props) => props.theme.color.primary};
  }

  &:hover {
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
  }
`;

const SocialLink = styled.a`
  color: gray;
  margin-right: 1rem;
  cursor: pointer;

  &:focus {
    color: gray;
  }

  &:hover {
    color: gray;
    text-decoration: none;
  }
`;

const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Splash />
      <Section title='Hello!' variant='dark'>
        <Description>
          Hi! I'm Adam, a software developer specializing in React currently based in Birmingham, UK. I enjoy creating
          modern and functional websites, with ease of use at the forefront.
        </Description>
        <Email href='mailto:adam@aydev.uk'>adam@aydev.uk</Email>

        <div className='d-flex mt-4'>
          <SocialLink href='https://www.linkedin.com/in/adammichaelyoung/' target='_blank' rel='noopener'>
            LinkedIn
          </SocialLink>
          <SocialLink href='https://www.instagram.com/adammyoungphotography/' target='_blank' rel='noopener'>
            Instagram
          </SocialLink>
        </div>
      </Section>

      <Section title='Skills' variant='light' icon={faBookOpen}>
        Text
      </Section>

      <Section title='Experience' variant='light' icon={faUserTie}>
        Text
      </Section>

      <Section title='Contact' variant='dark' icon={faAddressCard}>
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
