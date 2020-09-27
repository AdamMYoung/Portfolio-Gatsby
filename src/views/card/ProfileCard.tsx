import React, { useEffect, useState } from 'react';
import { faMapMarkerAlt, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { Post } from '../../types';
import { Card } from './Card';
import { getBlogPosts } from '../../api/bloggerApi';

import profile from '../../assets/profile.jpg';
import { SkillCard } from './SkillCard';

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
  min-height: 615px;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const ProfileImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 75%;
  }
`;

export const ProfileCard = () => {
  const [latestBlog, setLatestBlog] = useState<Post | null>(null);

  useEffect(() => {
    const loadLatestBlog = async () => {
      const posts = await getBlogPosts();
      if (posts) setLatestBlog(posts[0]);
    };

    loadLatestBlog();
  }, []);

  return (
    <HeightenedCard className='p-2'>
      <Container fluid className='h-auto h-sm-100'>
        <Row className='h-auto h-sm-100'>
          <Col xs={6} sm={12} className='mt-3 d-flex align-items-center'>
            <ProfileImage src={profile} alt='Profile picture of developer' fluid roundedCircle />
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
          <Col xs={12} className='mt-2 d-flex'>
            <SkillCard title='Latest Blog Post' disabled>
              {latestBlog ? (
                <>
                  <p style={{ fontSize: 12 }}>{new Date(latestBlog.published).toDateString()}</p>
                  <a style={{ fontSize: 12 }} href={latestBlog.url} target='_blank' rel='noopener noreferrer'>
                    <p className='py-2'>{latestBlog.title}</p>
                  </a>
                </>
              ) : (
                <p style={{ height: 100 }}>Loading...</p>
              )}
            </SkillCard>
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
            <Button
              style={{ height: 48 }}
              className='m-0 mx-1'
              variant='outline-dark'
              href='https://www.linkedin.com/in/adammichaelyoung/'
              target='_blank'
            >
              <FontAwesomeIcon size='2x' icon={faLinkedin} />
            </Button>
          </Col>
        </Row>
      </Container>
    </HeightenedCard>
  );
};
