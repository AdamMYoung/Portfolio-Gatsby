import React, { useEffect, useState } from 'react';
import { faMapMarkerAlt, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Card } from 'aydev-components';

import { Post } from '../../types';
import { getBlogPosts } from '../../api/bloggerApi';

import profile from '../../assets/profile.jpg';
import { SkillCard } from './SkillCard';

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
    <div>
      <Card.Header>
        <Card.Header.Image src={profile} alt='Profile picture of developer' />
        <Card.Header.Title>Adam Young</Card.Header.Title>
      </Card.Header>
      <Card.Body>
        <Card.Body.List>
          <Card.Body.List.Entry icon={faSuitcase}>Software Developer</Card.Body.List.Entry>
          <Card.Body.List.Entry icon={faMapMarkerAlt}>Birmingham, UK</Card.Body.List.Entry>
        </Card.Body.List>
        <Card.Entry>
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
        </Card.Entry>
        <Card.Body.ButtonRow>
          <Card.Body.ButtonRow.Button href='https://github.com/AdamMYoung' target='_blank'>
            <FontAwesomeIcon size='2x' icon={faGithub} />
          </Card.Body.ButtonRow.Button>
          <Card.Body.ButtonRow.Button href='https://www.instagram.com/adammyoungphotography' target='_blank'>
            <FontAwesomeIcon size='2x' icon={faInstagram} />
          </Card.Body.ButtonRow.Button>
          <Card.Body.ButtonRow.Button href='https://www.linkedin.com/in/adammichaelyoung/' target='_blank'>
            <FontAwesomeIcon size='2x' icon={faLinkedin} />
          </Card.Body.ButtonRow.Button>
        </Card.Body.ButtonRow>
      </Card.Body>
    </div>
  );
};
