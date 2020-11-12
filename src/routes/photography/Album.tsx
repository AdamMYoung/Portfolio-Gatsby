import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAlbums } from '../../hooks/useAlbums';
import { Splash } from '../../views/splash/Splash';
import { Col, Image, Row } from 'react-bootstrap';
import { Section } from '../../views/section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';
import { useFullScreenStatus } from '../../providers/FullScreenProvider';

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const ImageThumbnail = styled(Image)`
  transition: filter 0.3s;

  ${ImageContainer}:hover & {
    filter: brightness(48%) blur(1px);
  }
`;

const BackLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

type Props = {
  albumName: string;
};

export const Album = (props: Props) => {
  const { isLoading, data } = useAlbums();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { setFullScreen } = useFullScreenStatus();

  const album = data?.items.filter((album) => album.fields.name === props.albumName)[0];
  const images = album?.fields.images;

  useEffect(() => {
    setFullScreen(selectedIndex !== null);
    return () => setFullScreen(false);
  }, [selectedIndex, setFullScreen]);

  console.log(selectedIndex);

  if (isLoading) return null;
  if (!album) return <Redirect to='/page-not-found' />;

  return (
    <>
      <Splash backgroundImage={album.fields.featuredImage.fields.file.url}>
        <h1 className='font-weight-bold'>{album.fields.name}</h1>
        <BackLink to='/photography'>
          <FontAwesomeIcon style={{ marginRight: '0.5rem' }} icon={faArrowLeft} />
          Go back
        </BackLink>
      </Splash>

      <Section title='Pictures' variant='dark'>
        <Row>
          {!isLoading &&
            images &&
            images.map((image, index) => {
              const { file } = image.fields;
              return (
                <Col key={file.url} xs={6} sm={4} className='my-auto'>
                  <ImageContainer onClick={() => setSelectedIndex(index)}>
                    <ImageThumbnail fluid src={file.url + '?w=350'} />
                  </ImageContainer>
                </Col>
              );
            })}
        </Row>
      </Section>

      {selectedIndex !== null && images && (
        <Lightbox
          mainSrc={images[selectedIndex].fields.file.url}
          prevSrc={images[(selectedIndex + images.length - 1) % images.length].fields.file.url}
          nextSrc={images[(selectedIndex + 1) % images.length].fields.file.url}
          onMovePrevRequest={() => setSelectedIndex((selectedIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setSelectedIndex((selectedIndex + 1) % images.length)}
          onCloseRequest={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
};
