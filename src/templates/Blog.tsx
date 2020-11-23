import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Layout from '../components/views/Layout';
import { Section } from '../components/views/section/Section';
import { Splash } from '../components/views/splash/Splash';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const LinkCard = styled.div`
  display: flex;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`;

type Props = {
  data: any;
};

const Blog = ({ data }: Props) => {
  const { splash, posts, name, slug, description } = data.contentfulBlog;

  return (
    <Layout title={name}>
      <Helmet>
        <meta name='description' content={description?.description} />
      </Helmet>
      <Splash backgroundImage={splash.background.fluid}>
        {documentToReactComponents(JSON.parse(splash.content.raw))}
      </Splash>

      <Section title='Blog Posts' variant='light'>
        <ListGroup variant='flush'>
          {posts
            .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate))
            .map((post) => (
              <ListGroup.Item action>
                <Link className='text-decoration-none' style={{ color: 'black' }} to={`${slug}${post.slug}`}>
                  <LinkCard>
                    <Container fluid>
                      <Row>
                        <Col className='mb-4' sm={12} md={3}>
                          <GatsbyImage className='mx-auto' fluid={post.headerImage.fluid} />
                        </Col>
                        <Col>
                          <div className='ml-md-4 d-flex flex-column w-100'>
                            <div className='d-flex flex-column flex-md-row w-100 mb-2'>
                              <h3 className='flex-grow-1 my-auto'>{post.title}</h3>
                              <p className='mb-auto'>{moment(post.publishDate).format('DD/MM/YYYY')}</p>
                            </div>
                            {post.summary && <p>{post.summary.summary}</p>}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </LinkCard>
                </Link>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Section>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query blogQuery($slug: String!, $date: Date!) {
    contentfulBlog(slug: { eq: $slug }, posts: { elemMatch: { publishDate: { lt: $date } } }) {
      name
      slug
      description {
        description
      }
      posts {
        title
        slug
        publishDate
        headerImage {
          fluid(quality: 25) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        summary {
          summary
        }
      }
      splash {
        background {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        content {
          raw
        }
      }
    }
  }
`;
