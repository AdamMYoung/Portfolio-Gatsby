import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Layout from '../components/views/Layout';
import { Section } from '../components/views/section/Section';
import { Splash } from '../components/views/splash/Splash';

type Props = {
  data: any;
};

const Blog = ({ data }: Props) => {
  const { splash, posts, name, slug } = data.contentfulBlog;

  return (
    <Layout title={name}>
      <Splash backgroundImage={splash.background.fluid}>
        {documentToReactComponents(JSON.parse(splash.content.raw))}
      </Splash>

      <Section title='Blog Posts' variant='light'>
        <ListGroup>
          {posts.map((post) => (
            <ListGroup.Item action>
              <Link style={{ color: 'black' }} to={`${slug}/${encodeURI(post.title.toLowerCase())}`}>
                <div className='d-flex'>
                  <GatsbyImage fixed={post.headerImage.fixed} />
                  <div className='ml-4 d-flex flex-column'>
                    <h3>{post.title}</h3>
                    <p>{post.summary.summary}</p>
                  </div>
                </div>
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
  query blogQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      name
      slug
      posts {
        title
        headerImage {
          fixed(width: 200) {
            ...GatsbyContentfulFixed_withWebp_noBase64
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
