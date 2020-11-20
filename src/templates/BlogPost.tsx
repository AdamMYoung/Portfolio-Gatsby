import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

import Layout from '../components/views/Layout';
import { Splash } from '../components/views/splash/Splash';

type Props = {
  data: any;
};

const BlogPost = ({ data }: Props) => {
  const { title, summary, content, headerImage } = data.contentfulBlogPost;
  const { edges: posts } = data.allContentfulBlogPost;
  const { slug } = data.contentfulBlog;

  return (
    <Layout title={title}>
      <Splash backgroundImage={headerImage.fluid}>
        <h1 className='h2'>{title}</h1>
        <p>{summary.summary}</p>
      </Splash>
      <hr />
      <Container fluid='xl' className='my-4'>
        <Row>
          <Col xs={12} md={9}>
            <h2>{title}</h2>
            {documentToReactComponents(JSON.parse(content.raw))}
          </Col>
          <Col xs={12} md={3}>
            <ListGroup>
              {posts.map(({ node: post }) => (
                <Link style={{ color: 'black' }} to={`${slug}/${encodeURI(post.title.toLowerCase())}`}>
                  <ListGroup.Item action>{post.title}</ListGroup.Item>
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
