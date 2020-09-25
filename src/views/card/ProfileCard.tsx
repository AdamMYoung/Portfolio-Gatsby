import React from 'react';
import { faMapMarkerAlt, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';

import profile from '../../assets/profile.jpg';
import { Card } from './Card';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ListItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
  padding: 2px 8px !important;
  border: 0;

  svg {
    width: 16px !important;
    margin-right: 12px !important;
  }

  * {
    margin: 0;
  }
`;

const HeightenedCard = styled(Card)`
  min-height: 525px;

  @media (max-width: 576px) {
    min-height: auto;
  }
`;

export const ProfileCard = () => {
  return (
    <HeightenedCard className='p-2'>
      <Container fluid className='h-auto h-sm-100'>
        <Row className='h-auto h-sm-100'>
          <Col xs={6} sm={12} className='mt-3 d-flex align-items-center'>
            <Image src={profile} fluid roundedCircle />
          </Col>
          <Col xs={6} sm={12} className='d-flex align-items-center justify-content-center'>
            <h1 className='h4 mt-4 '>Adam Young</h1>
          </Col>
          <Col xs={12} className='mt-2'>
            <ListGroup>
              <ListItem>
                <FontAwesomeIcon className='mr-2' icon={faSuitcase} />
                <p>Software Developer</p>
              </ListItem>
              <ListItem>
                <FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt} />
                <p>Birmingham, UK</p>
              </ListItem>
            </ListGroup>
          </Col>
          <Col xs={12} className='mt-4 d-flex justify-content-center'>
            <Button
              style={{ height: 48 }}
              className='m-0 mx-1'
              variant='outline-dark'
              href='https://github.com/AdamMYoung'
              target='_blank'
            >
              <FontAwesomeIcon size='2x' icon={faGithub} />
            </Button>
            <Button
              style={{ height: 48 }}
              className='m-0 mx-1'
              variant='outline-dark'
              href='https://www.instagram.com/adammyoungphotography'
              target='_blank'
            >
              <FontAwesomeIcon size='2x' icon={faInstagram} />
            </Button>
          </Col>
        </Row>
      </Container>
    </HeightenedCard>
  );
};
