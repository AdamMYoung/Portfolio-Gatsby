import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

import Layout from '../components/views/Layout';
import { Splash } from '../components/views/splash/Splash';

type Props = {
  data: any;
};

const BlogPost = ({ data }: Props) => {
  const { title, publishDate, summary, content, headerImage } = data.contentfulBlogPost;
  const { edges: posts } = data.allContentfulBlogPost;
  const { slug } = data.contentfulBlog;

  return (
    <Layout title={title}>
      <Splash backgroundImage={headerImage.fluid}>
        <h1 className='h2'>{title}</h1>
        <p>{summary.summary}</p>
      </Splash>

      <Container fluid='xl' className='my-4' style={{ minHeight: '50vh' }}>
        <Row>
          <Col>
            <h2>{title}</h2>
            <p>{moment(publishDate).format('dddd Do MMMM YYYY')}</p>
            <hr />
            {documentToReactComponents(JSON.parse(content.raw))}
          </Col>
          {posts.length > 0 && (
            <Col xs={12} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <p className='h5 mb-4'>Other posts</p>
                  <ListGroup variant='flush'>
                    {posts.map(({ node: post }) => (
                      <Link style={{ color: 'black' }} to={`${slug}/${encodeURI(post.title.toLowerCase())}`}>
                        <ListGroup.Item action>
                          <div className='d-flex'>
                            <b className='flex-grow-1 my-auto'>{post.title}</b>
                            <p className='my-auto'>{moment(post.publishDate).format('DD/MM/YYYY')}</p>
                          </div>
                          <p>{post.summary.summary}</p>
                        </ListGroup.Item>
                      </Link>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query blogPostQuery($title: String!) {
    contentfulBlog(posts: { elemMatch: { title: { eq: $title } } }) {
      slug
    }
    contentfulBlogPost(title: { eq: $title }) {
      title
      publishDate
      summary {
        summary
      }
      headerImage {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      content {
        raw
      }
    }
    allContentfulBlogPost(limit: 5, filter: { title: { ne: $title } }, sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          publishDate
          summary {
            summary
          }
        }
      }
    }
  }
`;
