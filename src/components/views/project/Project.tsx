import GatsbyImage, { FluidObject } from 'gatsby-image';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from '../../../types';

const ProjectCard = styled(Card)`
  border: none !important;
  margin-top: 1rem;
`;

type Props = {
  image: FluidObject;
  name: string;
  links: Link[];
};

export const Project: React.FC<Props> = (props) => {
  const { name, image, links, children } = props;
  return (
    <Col sm={12} md={6}>
      <ProjectCard>
        <GatsbyImage fluid={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {children}
            {/* {documentToReactComponents(JSON.parse(data.description.raw))} */}
          </Card.Text>

          <div className='d-flex flex-column'>
            {links.map((link) => (
              <Button className='my-1' href={link.url} target='_blank' rel='noopener'>
                {link.name}
              </Button>
            ))}
          </div>
        </Card.Body>
      </ProjectCard>
      <hr className='d-md-none mb-4' />
    </Col>
  );
};
