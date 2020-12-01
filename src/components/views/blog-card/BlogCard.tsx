import GatsbyImage, { FluidObject } from 'gatsby-image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import moment from 'moment';

type Props = {
  title: string;
  summary?: string;
  publishDate: Date;
  image: FluidObject;
};

export const BlogCard = (props: Props) => {
  const { title, summary, image, publishDate } = props;

  return (
    <Container fluid>
      <Row>
        <Col className='mb-4' sm={12} md={3}>
          <GatsbyImage className='mx-auto' fluid={image} />
        </Col>
        <Col>
          <div className='ml-md-4 d-flex flex-column w-100'>
            <div className='d-flex flex-column flex-md-row w-100 mb-2'>
              <h3 className='flex-grow-1 my-auto'>{title}</h3>
              <p className='mb-auto ml-2'>{moment(publishDate).format('DD/MM/YYYY')}</p>
            </div>
            <p>{summary}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
