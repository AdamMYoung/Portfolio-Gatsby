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
import { BlogCard } from '../components/views/blog-card/BlogCard';

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

        <meta property='og:type' content='website' />
        <meta property='og:description' content={description?.description} />
      </Helmet>
      <Splash backgroundImage={splash.background.fluid}>
        {documentToReactComponents(JSON.parse(splash.content.raw))}
      </Splash>

      <Section title='Blog Posts' variant='light'>
        <ListGroup variant='flush'>
          {posts
            .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
            .map((post) => (
              <ListGroup.Item action>
                <Link className='text-decoration-none' style={{ color: 'black' }} to={`${slug}${post.slug}`}>
                  <LinkCard>
                    <BlogCard
                      title={post.title}
                      summary={post?.summary?.summary}
                      image={post.headerImage.fluid}
                      publishDate={post.publishDate}
                    />
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
