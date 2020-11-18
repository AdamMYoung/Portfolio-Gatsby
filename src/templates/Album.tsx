import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/views/Layout';
import { useFullScreenStatus } from '../components/providers/FullScreenProvider';
import { Splash } from '../components/views/splash/Splash';
import { Section } from '../components/views/section/Section';

import 'react-image-lightbox/style.css';

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const ImageThumbnail = styled(GatsbyImage)`
  transition: filter 0.3s;
  margin-left: auto;
  margin-right: auto;

  ${ImageContainer}:hover & {
    filter: brightness(48%) blur(1px);
  }
`;

type Props = {
  data: any;
};

const Album = ({ data }: Props) => {
  const { name, featuredImage, images } = data.contentfulAlbum;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { setFullScreen } = useFullScreenStatus();

  useEffect(() => {
    setFullScreen(selectedIndex !== null);
    return () => setFullScreen(false);
  }, [selectedIndex, setFullScreen]);

  return (
    <Layout title={name}>
      <Splash backgroundImage={featuredImage.fluid}>
        <h1 className='font-weight-bold'>{name}</h1>
      </Splash>

      <Section title='Pictures' variant='dark'>
        <Row>
          {images.map((image, index) => {
            return (
              <Col key={image.id} sm={12} md={6} lg={4} className='my-auto'>
                <ImageContainer onClick={() => setSelectedIndex(index)}>
                  <ImageThumbnail fixed={image.fixed} />
                </ImageContainer>
              </Col>
            );
          })}
        </Row>
      </Section>

      {selectedIndex !== null && (
        <Lightbox
          mainSrc={images[selectedIndex].file.url}
          prevSrc={images[(selectedIndex + images.length - 1) % images.length].file.url}
          nextSrc={images[(selectedIndex + 1) % images.length].file.url}
          mainSrcThumbnail={images[selectedIndex].fixed.src}
          prevSrcThumbnail={images[(selectedIndex + images.length - 1) % images.length].fixed.src}
          nextSrcThumbnail={images[(selectedIndex + 1) % images.length].fixed.src}
          onMovePrevRequest={() => setSelectedIndex((selectedIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setSelectedIndex((selectedIndex + 1) % images.length)}
          onCloseRequest={() => setSelectedIndex(null)}
        />
      )}
    </Layout>
  );
};

export default Album;

export const query = graphql`
  query albumQuery($name: String!) {
    contentfulAlbum(name: { eq: $name }) {
      name
      featuredImage {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      images {
        id
        fixed(width: 400, quality: 15) {
          ...GatsbyContentfulFixed_withWebp
        }

        file {
          url
        }
      }
    }
  }
`;
