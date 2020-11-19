import { Link } from 'gatsby';
import GatsbyImage, { FixedObject } from 'gatsby-image';
import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const AlbumThumbnail = styled(GatsbyImage)`
  transition: filter 0.3s;
  margin-left: auto;
  margin-right: auto;

  filter: brightness(70%);

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
  color: white;
`;

type Props = {
  name: string;
  url: string;
  thumbnail: FixedObject;
};

export const Album = (props: Props) => {
  const { name, url, thumbnail } = props;

  return (
    <Col sm={12} md={6} lg={4}>
      <Link to={url}>
        <ImageContainer>
          <AlbumThumbnail fixed={thumbnail} alt={name} />
          <AlbumText>{name}</AlbumText>
        </ImageContainer>
      </Link>
    </Col>
  );
};
