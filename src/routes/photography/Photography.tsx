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

  &:hover {
    cursor: pointer;
  }
`;

const AlbumThumbnail = styled(Image)`
  transition: filter 0.3s;

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
                <Col key={name} xs={6} sm={4}>
                  <LinkContainer to={`/photography/${name}`}>
                    <ImageContainer>
                      <AlbumThumbnail fluid src={file.url} alt={title} />
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
