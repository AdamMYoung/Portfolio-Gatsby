import ReactDOMServer from 'react-dom/server';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import React, { useRef } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Disqus } from 'gatsby-plugin-disqus';
import readingTime from 'reading-time';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { BLOCKS } from '@contentful/rich-text-types';
import { Helmet } from 'react-helmet';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/views/Layout';
import { Splash } from '../components/views/splash/Splash';
import { Section } from '../components/views/section/Section';

const RichTextLayout = styled.div`
  h1,
  h2 {
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }

  h3,
  h4,
  h5 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

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

  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter style={tomorrow} children={value} language={language} />;
    },
  };

  const contentfulRenderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const embeddedElement = node.data.target;

        switch (embeddedElement.internal.type) {
          case 'ContentfulAsset':
            return (
              <div className='mx-auto my-2'>
                <GatsbyImage
                  imgStyle={{ objectFit: 'contain' }}
                  style={{ maxHeight: '50vh' }}
                  fluid={embeddedElement.fluid}
                />
              </div>
            );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const embeddedElement = node.data.target;

        switch (embeddedElement.internal.type) {
          case 'ContentfulCodeBlock':
            return <ReactMarkdown children={embeddedElement.code.code} renderers={renderers} />;
          default:
            return null;
        }
      },
    },
  };

  const blogContent = renderRichText(content, contentfulRenderOptions);
  const stats = readingTime(ReactDOMServer.renderToStaticMarkup(blogContent as any));

  return (
    <Layout title={title}>
      <Helmet>
        <meta name='description' content={summary?.summary} />

        <meta property='og:type' content='article' />
        <meta property='og:article:published_time' content={moment(publishDate).toISOString()} />
        <meta property='og:article:author:profile:first_name' content='Adam' />
        <meta property='og:article:author:profile:last_name' content='Young' />
        <meta property='og:description' content={summary?.summary} />

        <script type='application/ld+json'>
          {{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            datePublished: moment(publishDate).toISOString(),
            headline: title,
            image: headerImage.fluid.src,
          }}
        </script>
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
            <RichTextLayout>{blogContent}</RichTextLayout>
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
        references {
          ... on ContentfulCodeBlock {
            contentful_id
            code {
              code
            }
            internal {
              type
            }
          }
          ... on ContentfulAsset {
            contentful_id
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
            internal {
              type
            }
          }
        }
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
