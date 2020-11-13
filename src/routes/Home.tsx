import { faAddressCard, faBookOpen, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Form, Table, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

import { Skills } from '../content';
import { Section } from '../views/section/Section';
import { Splash } from '../views/splash/Splash';
import { TileList } from '../views/tile-list/TileList';

import finance from '../assets/finance.jpg';
import vocalia from '../assets/vocalia.png';

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

const ProjectCard = styled(Card)`
  border: none;
  margin-top: 1rem;
`;

const Home = () => {
  return (
    <>
      <Splash>
        <h1 className='font-weight-bold'>Adam Young</h1>
        <h2>Software Developer</h2>
        <h2>Photographer</h2>
        <h2>Based in Birmingham, UK</h2>
      </Splash>
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

      <Section id='skills' title='Skills' variant='dark' icon={faBookOpen}>
        <TileList entries={Skills} />
      </Section>

      <Section id='projects' title='Projects' variant='light'>
        <Row>
          <Col sm={12} md={6}>
            <ProjectCard>
              <Card.Img variant='top' src={finance} />
              <Card.Body>
                <Card.Title>AYDev | Finance</Card.Title>
                <Card.Text>
                  AYDev | Finance is a web-based financial management app. It provides overview and historical analysis
                  of purchases, supports recurring payments and offline functionality.
                </Card.Text>
                <div className='d-flex'>
                  <Button href='https://finance.aydev.uk/' target='_blank' className='mx-1 my-1'>
                    Website
                  </Button>
                </div>
              </Card.Body>
            </ProjectCard>
            <hr className='d-md-none mb-4' />
          </Col>

          <Col sm={12} md={6}>
            <ProjectCard>
              <Card.Img variant='top' src={vocalia} />
              <Card.Body>
                <Card.Title>Vocalia</Card.Title>
                <Card.Text>
                  Vocalia is a web-based podcasting platform, which allowed the user to listen and create podcasts
                  within the same ecosystem. The project was built over several months as part of my final year project
                  at university.
                </Card.Text>

                <Button href='https://github.com/AdamMYoung/Vocalia-Listen' target='_blank' className='mx-1 my-1'>
                  Github (Listen)
                </Button>
                <Button href='https://github.com/AdamMYoung/Vocalia-Create' target='_blank' className='mx-1 my-1'>
                  Github (Create)
                </Button>
                <Button href='https://github.com/AdamMYoung/Vocalia-API' target='_blank' className='mx-1 my-1'>
                  Github (API)
                </Button>
              </Card.Body>
            </ProjectCard>
          </Col>
        </Row>
      </Section>

      <Section id='experience' title='Experience' variant='gray' icon={faUserTie}>
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

      <Section id='contact' title='Contact' variant='light' icon={faAddressCard}>
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

export default Home;
