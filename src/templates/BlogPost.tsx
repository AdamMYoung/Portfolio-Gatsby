import ReactDOMServer from 'react-dom/server';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Disqus } from 'gatsby-plugin-disqus';
import readingTime from 'reading-time';

import Layout from '../components/views/Layout';
import { Splash } from '../components/views/splash/Splash';
import { Section } from '../components/views/section/Section';
import { Helmet } from 'react-helmet';

type Props = {
  data: any;
};

const BlogPost = ({ data }: Props) => {
  const { title, publishDate, summary, content, headerImage, slug: postSlug } = data.contentfulBlogPost;
  const { edges: posts } = data.allContentfulBlogPost;
  const { slug } = data.contentfulBlog;

  const disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl}${slug}${postSlug}`,
    identifier: postSlug,
    title,
  };

  const blogContent = documentToReactComponents(JSON.parse(content.raw));
  const stats = readingTime(ReactDOMServer.renderToStaticMarkup(blogContent as any));

  return (
    <Layout title={title}>
      <Helmet>
        <meta name='description' content={summary?.summary} />
      </Helmet>
      <Splash backgroundImage={headerImage.fluid}>
        <h1 className='h2'>{title}</h1>
        {summary && <p>{summary.summary}</p>}
      </Splash>

      <Container fluid='xl' className='my-4' style={{ minHeight: '30vh' }}>
        <Row>
          <Col>
            <h2>{title}</h2>
            <p className='my-0' style={{ fontSize: '1rem' }}>
              {moment(publishDate).format('dddd Do MMMM YYYY')}
            </p>
            <p style={{ fontSize: '1rem' }}>{stats.text}</p>
            <hr />
            {blogContent}
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
                        to={`${slug}${post.slug}`}
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
      <Section title='Discussion' variant='dark'>
        <Disqus config={disqusConfig} />
      </Section>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query blogPostQuery($title: String!, $date: Date!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulBlog(posts: { elemMatch: { title: { eq: $title } } }) {
      slug
    }
    contentfulBlogPost(title: { eq: $title }) {
      title
      publishDate
      slug
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
    allContentfulBlogPost(
      limit: 5
      filter: { title: { ne: $title }, publishDate: { lt: $date } }
      sort: { fields: publishDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate
        }
      }
    }
  }
`;
