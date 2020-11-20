import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

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

      <Container fluid='xl' className='my-4'>
        <Row>
          <Col xs={12} md={9}>
            <h2>{title}</h2>
            <p>{moment(publishDate).format('dddd Do MMMM YYYY')}</p>
            <hr />
            {documentToReactComponents(JSON.parse(content.raw))}
          </Col>
          <Col xs={12} md={3}>
            <p className='h5 mb-4'>Recent posts</p>
            <ListGroup>
              {posts.map(({ node: post }) => (
                <Link style={{ color: 'black' }} to={`${slug}/${encodeURI(post.title.toLowerCase())}`}>
                  <ListGroup.Item action>
                    <b>{post.title}</b>
                    <p className='mt-2 mb-0'>{moment(post.publishDate).format('DD/MM/YYYY')}</p>
                  </ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
          </Col>
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
    allContentfulBlogPost(limit: 5) {
      edges {
        node {
          title
          publishDate
        }
      }
    }
  }
`;
