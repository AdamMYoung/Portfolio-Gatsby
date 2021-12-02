import { graphql } from 'gatsby';
import React, { VFC } from 'react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

import { BlogPost } from '../type';
import { Layout } from '../views';
import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/layout';
import { stringToLongDate } from '../utils/date';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import GatsbyLink from 'gatsby-link';
import { Link } from '../components';
import { chakra } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type BlogPostProps = {
    data: {
        contentfulBlogPost: BlogPost;
    };
};

const ChakraGatsbyImage = chakra(GatsbyImage);

const BlogEntry: VFC<BlogPostProps> = ({ data }) => {
    const { title, createdAt, updatedAt, heroImage, copy } = data.contentfulBlogPost;

    const createdAtText = stringToLongDate(createdAt);
    const updatedAtText = stringToLongDate(updatedAt);

    return (
        <Layout>
            <Stack spacing="6">
                <Box>
                    <Button as={GatsbyLink} to="/blog" variant="link" pl="0">
                        Back to Blog
                    </Button>
                </Box>
                <Stack>
                    <Heading>{title}</Heading>
                    <Heading variant="subtitle" fontSize="lg">
                        {createdAtText}
                    </Heading>
                </Stack>
            </Stack>

            <ChakraGatsbyImage image={getImage(heroImage)} alt={title} rounded="xl" />
            {createdAtText !== updatedAtText && (
                <Heading variant="subtitle" fontSize="lg">
                    Last updated on {updatedAtText}
                </Heading>
            )}
            <ReactMarkdown components={ChakraUIRenderer()} children={copy.copy} skipHtml />
            <Divider />
            <Stack spacing="4">
                <Text fontSize="md">Written by Adam Young</Text>
                <Text fontSize="md" variant="subtitle">
                    Adam Young is a front-end engineer, who specializes in React and modern web technologies. He's
                    working at <Link href="https://curve.com">Curve</Link> as a front-end engineer. He currently lives
                    in Birmingham, UK with his fiance and two cats.
                </Text>
            </Stack>
        </Layout>
    );
};

export default BlogEntry;

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            createdAt
            updatedAt
            id
            topics
            title
            slug
            copy {
                copy
            }
            heroImage {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
    }
`;
