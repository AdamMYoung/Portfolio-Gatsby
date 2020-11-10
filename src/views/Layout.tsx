import { faAddressCard, faBookOpen, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
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
        <Table responsive>
          <tbody>
            <tr>
              <td>
                <Description>July 2019 - Present</Description>
              </td>
              <td>
                <Description>
                  Developer at <b>TerraQuest Solutions</b>
                </Description>
              </td>
            </tr>
            <tr>
              <td>
                <Description>2018 - 2019</Description>
              </td>
              <td>
                <Description>
                  Final Year Student at <b>Teesside University</b>
                </Description>
              </td>
            </tr>
            <tr>
              <td>
                <Description>2017 - 2018</Description>
              </td>
              <td>
                <Description>
                  Placement Software Developer at <b>DuPont Teijin Films</b>
                </Description>
              </td>
            </tr>
            <tr>
              <td>
                <Description>2015 - 2017</Description>
              </td>
              <td>
                <Description>
                  Student at <b>Teesside University</b>
                </Description>
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title='Contact' variant='light' icon={faAddressCard}>
        <Form name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='John Doe' name='name' />
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='john.doe@contact.co.uk' name='email' />
          </Form.Group>

          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' type='text' name='message' placeholder='Hi, I was wondering...' />
          </Form.Group>

          <Button type='submit'>Send</Button>
        </Form>
      </Section>
    </>
  );
};

export default Layout;
