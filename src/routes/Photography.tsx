import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import { useAlbums } from '../hooks/useAlbums';
import { Section } from '../views/section/Section';
import { Splash } from '../views/splash/Splash';

export const Photography = () => {
  const { isLoading, data } = useAlbums();

  console.log(data);

  return (
    <>
      <Splash>
        <h1 className='font-weight-bold'>Photography</h1>
      </Splash>

      <Section title='Albums' variant='dark'>
        <Row>
          {!isLoading &&
            data?.items.map((album) => {
              const { featuredImage, name } = album.fields;
              const { file, title } = featuredImage.fields;
              return (
                <Col key={name} xs={6} sm={4}>
                  <Image fluid src={file.url} alt={title} />
                  {name}
                </Col>
              );
            })}
        </Row>
      </Section>
    </>
  );
};
