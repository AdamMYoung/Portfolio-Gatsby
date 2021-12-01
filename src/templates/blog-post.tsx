import { graphql } from 'gatsby';
import React, { VFC } from 'react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

import { BlogPost } from '../type';
import { Layout } from '../views';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { stringToLongDate } from '../utils/date';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import GatsbyLink from 'gatsby-link';

type BlogPostProps = {
    data: {
        contentfulBlogPost: BlogPost;
    };
};

const BlogEntry: VFC<BlogPostProps> = ({ data }) => {
    const { title, createdAt, heroImage, copy } = data.contentfulBlogPost;

    return (
        <Layout>
            <Stack>
                <Box>
                    <Button as={GatsbyLink} to="/blog" variant="ghost">
                        Back to Blog
                    </Button>
                </Box>
                <Heading>{title}</Heading>
                <Heading variant="subtitle" fontSize="lg">
                    {stringToLongDate(createdAt)}
                </Heading>
            </Stack>

            <Image src={heroImage.file.url} rounded="xl" aria-label={title} />

            <ReactMarkdown components={ChakraUIRenderer()} children={copy.copy} skipHtml />
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
                file {
                    url
                }
            }
        }
    }
`;
