import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';

import Layout from '../components/views/Layout';
import { Splash } from '../components/views/splash/Splash';
import { Section } from '../components/views/section/Section';
import { ContentResolver } from '../components/views/contentful/ContentResolver';
import { Container, Row } from 'react-bootstrap';

type Props = {
  data: any;
};

const Page = ({ data }: Props) => {
  const { splash, sections, name } = data.contentfulPage;

  return (
    <Layout title={name}>
      <Splash backgroundImage={splash.background.fluid}>
        {documentToReactComponents(JSON.parse(splash.content.raw))}
      </Splash>
      {sections.map((section) => (
        <Section variant={section.variant} title={section.title} icon={section.faIcon}>
          <Container fluid>
            <Row>
              {section.content.map((item) => (
                <ContentResolver data={item} />
              ))}
            </Row>
          </Container>
        </Section>
      ))}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      name
      sections {
        displayInNav
        title
        variant
        content {
          ... on ContentfulText {
            content {
              raw
            }
            links {
              url
              name
            }
            internal {
              type
            }
          }
          ... on ContentfulSkillSet {
            skills {
              category
              description {
                description
              }
              devIconCssName
              name
            }
            internal {
              type
            }
          }
          ... on ContentfulProject {
            name
            image {
              fluid(quality: 50, maxWidth: 600) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
            description {
              raw
            }
            links {
              url
              name
            }
            internal {
              type
            }
          }
          ... on ContentfulExperienceSet {
            experienceHistory {
              jobTitle
              company
              date
            }
            internal {
              type
            }
          }
          ... on ContentfulAlbum {
            name
            featuredImage {
              fixed(width: 400) {
                ...GatsbyContentfulFixed_withWebp_noBase64
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulContact {
            name
            internal {
              type
            }
          }
        }
      }
      splash {
        background {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        name
        content {
          raw
        }
      }
    }
  }
`;
