import React from 'react';
import { Col } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Home = () => {
  return (
    <DetailCard title='About Me' description='An introduction to my work and hobbies.'>
      <Col className='mt-4' xs={12}></Col>
      <Col xs={12} sm={6}>
        <p className='h4'>Software Developer</p>
        <p>
          I graduated university in 2019 with a BSc Computer Science, and currently working in Birmingham, in the UK.
        </p>
      </Col>
      <Col xs={12} sm={6} className='mt-4 mt-sm-0'>
        <p className='h4'>Photographer</p>
        <p>
          During the COVID-19 lockdown I decided to take photography on as a hobby. I'm currently interested in urban
          photography, with a Nikon D3500 as my camera of choice.
        </p>
      </Col>
      <Col xs={12} className='mt-4'>
        <p className='h4'>Cyclist</p>
        <p>
          I also started cycling as a way to get about the city, and to improve my general fitness. Since selling my
          car, it's been an excellent way to explore the places around me. I hope to travel more once restrictions lift
          and explore more of the world by bike.
        </p>
      </Col>
    </DetailCard>
  );
};

export default Home;
