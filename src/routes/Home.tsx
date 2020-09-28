import { faBicycle, faCamera, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';
import { SkillCard } from '../views/card/SkillCard';

const Home = () => {
  return (
    <DetailCard nextUrl='/skills' title='About Me' description='An introduction to my work and hobbies.'>
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <SkillCard disabled icon={faLaptopCode} title='Software Developer'>
              <p>
                I graduated university in 2019 with a BSc Computer Science, and currently work in Birmingham. I'm a
                full-stack developer, specializing in React.js for the front-end and .NET Core for the back-end. I have
                experience across the entire development lifecycle, working in scrum teams to deliver requirements
                efficiently.
              </p>
              <p className='mt-2'>
                I also have experience in various other languages such as Ada, Clojure, Java and Kotlin, as well as
                Android, WPF, and ASP.NET MVC development.
              </p>
            </SkillCard>
          </Col>
          <Col xs={12} md={6} className='mt-4 '>
            <SkillCard disabled icon={faCamera} title='Photographer'>
              <p>
                During the COVID-19 lockdown I decided to take up photography to get out and about. My current camera of
                choice is a Nikon D3500.
              </p>
            </SkillCard>
          </Col>
          <Col xs={12} md={6} className='mt-4'>
            <SkillCard disabled icon={faBicycle} title='Cyclist'>
              <p>
                I also started cycling as a way to get about the city, and to improve my general fitness. Since selling
                my car, it's been a life saver.
              </p>
            </SkillCard>
          </Col>
        </Row>
      </Container>
    </DetailCard>
  );
};

export default Home;
