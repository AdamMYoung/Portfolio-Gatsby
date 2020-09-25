import React from 'react';
import { Col } from 'react-bootstrap';
import { Card } from '../views/card/Card';

import { DetailCard } from '../views/card/DetailCard';

const Home = () => {
  return (
    <DetailCard title='About Me' description='A short description of my work and hobbies.'>
      <Col xs={12} sm={6}>
        <Card>
          <p className='h4'>Software Developer</p>
          <p>
            I graduated university in 2019 with a BSc Computer Science, and currently working in Birmingham, in the UK.
          </p>
        </Card>
      </Col>
      <Col xs={12} sm={6} className='mt-4 mt-sm-0'>
        <Card>
          <p className='h4'>Photographer</p>
          <p>
            During the COVID-19 lockdown I decided to take photography on as a hobby. I'm currently interested in urban
            photography, with a Nikon D3500 as my camera of choice.
          </p>
        </Card>
      </Col>
      <Col xs={12}>
        <Card className='mt-4'>
          <p className='h4'>Cyclist</p>
          <p>
            I also started cycling as a way to get about the city, and to improve my general fitness. Since selling my
            car, it's been an excellent way to explore places I've not been yet.
          </p>
        </Card>
      </Col>
    </DetailCard>
  );
};

export default Home;
