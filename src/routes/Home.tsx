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
          <Col xs={12} md={6}>
            <SkillCard disabled icon={faLaptopCode} title='Software Developer'>
              <p>
                I graduated university in 2019 with a BSc Computer Science, and currently working in Birmingham, in the
                UK.
              </p>
            </SkillCard>
          </Col>
          <Col xs={12} md={6} className='mt-4 mt-md-0'>
            <SkillCard disabled icon={faCamera} title='Photographer'>
              <p>
                During the COVID-19 lockdown I decided to take photography on as a hobby. I'm currently interested in
                urban photography, with a Nikon D3500 as my camera of choice.
              </p>
            </SkillCard>
          </Col>
          <Col xs={12} className='mt-4'>
            <SkillCard disabled icon={faBicycle} title='Cyclist'>
              <p>
                I also started cycling as a way to get about the city, and to improve my general fitness. Since selling
                my car, it's been an excellent way to explore the places around me. I hope to travel more once
                restrictions lift and explore more of the world by bike.
              </p>
            </SkillCard>
          </Col>
        </Row>
      </Container>
    </DetailCard>
  );
};

export default Home;
