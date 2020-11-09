import { faAddressCard, faBookOpen, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

import { Skills } from '../content';
import { Navigation } from './navigation/Navigation';
import { Section } from './section/Section';
import { Splash } from './splash/Splash';
import { TileList } from './tile-list/TileList';

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
      <Section title='Hello!' variant='light'>
        <Description>
          Hi! I'm Adam, a software developer specializing in React, currently based in Birmingham, UK. I enjoy creating
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

      <Section title='Skills' variant='dark' icon={faBookOpen}>
        <TileList entries={Skills} />
      </Section>

      <Section title='Experience' variant='gray' icon={faUserTie}>
        Text
      </Section>

      <Section title='Contact' variant='light' icon={faAddressCard}>
        Text
      </Section>
    </>
  );
};

export default Layout;
