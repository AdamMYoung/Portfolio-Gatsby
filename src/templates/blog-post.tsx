import { Box, Button, chakra, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from '../components';
import { BlogPost } from '../type';
import { stringToLongDate } from '../utils/date';
import { Layout } from '../views';
import { SEO } from '../views/seo/SEO';

type BlogPostProps = {
    data: {
        contentfulPageBlogPost: BlogPost;
    };
};

const ChakraGatsbyImage = chakra(GatsbyImage);

const newTheme = {
    a: (props) => {
        const { href, children } = props;

        return <Link href={href}>{children}</Link>;
    },
};

const BlogEntry: VFC<BlogPostProps> = ({ data }) => {
    const { title, summary, createdAt, updatedAt, heroImage, copy, topics } = data.contentfulPageBlogPost;

    const createdAtText = stringToLongDate(createdAt);
    const updatedAtText = stringToLongDate(updatedAt);

    return (
        <Layout spacing="12">
            <SEO title={title} description={summary.summary} imageUrl={heroImage.file.url} imageAlt={title}>
                <meta property="og:type" content="article" />
                <meta property="og:article:published_time" content={createdAt} />
                <meta property="og:article:modified_time" content={updatedAt} />
                <meta property="og:article:section" content="Software Development" />
                {topics.map((t) => (
                    <meta property="og:article:tag" content={t} />
                ))}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'NewsArticle',
                        headline: title,
                        image: [heroImage.file.url],
                        datePublished: createdAt,
                        dateModified: updatedAt,
                        author: [
                            {
                                '@type': 'Person',
                                name: 'Adam Young',
                                url: 'http://aydev.uk',
                            },
                        ],
                    })}
                </script>
            </SEO>
            <Stack spacing="6">
                <Box>
                    <Button as={GatsbyLink} to="/blog" variant="link" pl="0">
                        Back to Blog
                    </Button>
                </Box>
                <Stack>
                    <Heading>{title}</Heading>
                    <Text variant="subtitle" fontSize="xl">
                        {copy.readingTime}
                    </Text>
                </Stack>
                <Divider />
                <Heading variant="subtitle" fontSize="md">
                    {createdAtText} {createdAtText !== updatedAtText && `(Updated on ` + updatedAtText + ')'}
                </Heading>
            </Stack>

            <Stack spacing="10">
                <ChakraGatsbyImage image={getImage(heroImage)} alt={title} rounded="xl" />
                <Stack spacing="6" fontSize={['md', null, 'lg']}>
                    <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={copy.copy} skipHtml />
                </Stack>

                <Divider />
                <Stack spacing="4">
                    <Text fontSize="md">Written by Adam Young</Text>
                    <Text fontSize="md" variant="subtitle">
                        Adam Young is a front-end engineer, who specializes in React and modern web technologies. He's
                        working at <Link href="https://curve.com">Curve</Link> as a front-end engineer. He currently
                        lives in Birmingham with his fiancé and two cats.
                    </Text>
                </Stack>
            </Stack>
        </Layout>
    );
};

export default BlogEntry;

export const query = graphql`
    query ($slug: String!) {
        contentfulPageBlogPost(slug: { eq: $slug }) {
            createdAt
            updatedAt
            id
            topics
            title
            slug
            summary {
                summary
            }
            copy {
                copy
                readingTime
            }
            heroImage {
                file {
                    url
                }
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
    }
`;
