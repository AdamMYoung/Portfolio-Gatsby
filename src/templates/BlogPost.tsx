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
        {summary && <p>{summary.summary}</p>}
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
                <p className='h5 px-4 pt-3 pb-2'>Other posts</p>

                <ListGroup variant='flush'>
                  {posts.map(({ node: post }) => (
                    <ListGroup.Item action>
                      <Link
                        className='text-decoration-none'
                        style={{ color: 'black', border: 'none' }}
                        to={`${slug}/${encodeURIComponent(post.title.toLowerCase())}`}
                      >
                        <p className='font-weight-bold flex-grow-1 mb-0'>{post.title}</p>
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
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
        }
      }
    }
  }
`;
