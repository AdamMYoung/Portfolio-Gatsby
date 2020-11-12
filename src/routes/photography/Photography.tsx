import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useAlbums } from '../../hooks/useAlbums';
import { Section } from '../../views/section/Section';
import { Splash } from '../../views/splash/Splash';
import { Album } from './Album';

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const AlbumThumbnail = styled(Image)`
  transition: filter 0.3s;
  margin-left: auto;
  margin-right: auto;

  ${ImageContainer}:hover & {
    filter: brightness(48%) blur(1px);
  }
`;

const AlbumText = styled.p`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  font-size: 2rem;
  transform: translate(0%, -50%);
  -webkit-transform: translate(0%, -50%);
  text-align: center;
  user-select: none;
`;

const PhotographyRoute = () => {
  const { isLoading, data } = useAlbums();

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
                <Col key={name} sm={12} md={6} lg={4}>
                  <link rel='preload' as='image' href={file.url}></link>
                  <LinkContainer to={`/photography/${name}`}>
                    <ImageContainer>
                      <AlbumThumbnail fluid src={file.url + '?w=350'} alt={title} />
                      <AlbumText>{name}</AlbumText>
                    </ImageContainer>
                  </LinkContainer>
                </Col>
              );
            })}
        </Row>
      </Section>
    </>
  );
};

export const Photography = () => (
  <Switch>
    <Route path='/photography' exact component={PhotographyRoute} />
    <Route path='/photography/:name' render={(props) => <Album albumName={props.match.params.name} />} />
  </Switch>
);