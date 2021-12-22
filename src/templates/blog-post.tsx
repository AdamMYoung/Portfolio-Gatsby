import { Box, Button, chakra, Divider, Heading, Spacer, Stack, Tag, Text, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useMemo, useState, VFC } from 'react';

import { CardList, Link, MarkdownRenderer, BlogCard, Progress } from '~components';
import { BlogPost } from '~types';
import { stringToLongDate } from '~utils/date';
import { Layout, SEO } from '~views';
import { useCombinedSubset, useIsMobile, useRelativeScrollPercentage } from '~hooks';
import { ContentsProvider } from '~providers/contents-provider';
import { Contents } from '~views/contents/Contents';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useDebounce, useWindowScroll } from 'react-use';
import { MotionFlex } from '~components/motion';

type BlogPostProps = {
    data: {
        contentfulPageBlogPost: BlogPost;
        matching: { nodes: BlogPost[] };
        notMatching: { nodes: BlogPost[] };
    };
};

const ChakraGatsbyImage = chakra(GatsbyImage);

const BlogEntry: VFC<BlogPostProps> = ({ data }) => {
    const { title, summary, createdAt, updatedAt, heroImage, copy, topics, slug } = data.contentfulPageBlogPost;
    const relatedBlogs = useCombinedSubset(3, [data.matching.nodes, data.notMatching.nodes]);

    const isMobile = useIsMobile();
    const [isReturnButtonVisible, setReturnButtonVisible] = useState(false);
    const [fromRef, toRef, { percentage }] = useRelativeScrollPercentage(400);

    useDebounce(() => setReturnButtonVisible(percentage > 20), 50, [percentage]);

    const createdAtText = stringToLongDate(createdAt);
    const updatedAtText = stringToLongDate(updatedAt);

    const pageUrl = `https://aydev.uk/blog/${slug}`;

    return (
        <ContentsProvider>
            <Layout spacing="12">
                <SEO title={title} description={summary.summary} imageUrl={heroImage.file.url} imageAlt={title}>
                    <meta property="og:type" content="article" />
                    <meta property="og:article:published_time" content={createdAt} />
                    <meta property="og:article:modified_time" content={updatedAt} />
                    <meta property="og:article:section" content="Software Development" />
                    {topics.map((t) => (
                        <meta key={t} property="og:article:tag" content={t} />
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
                        <Link href="/blog" fontSize={['md', null, 'lg']} pl="0">
                            <ArrowBackIcon mb="1" />
                            {` Back to Blog`}
                        </Link>
                    </Box>
                    <Stack>
                        <Heading>{title}</Heading>
                        <Stack spacing={4}>
                            <Text variant="subtitle" fontSize="xl">
                                {copy.readingTime}
                            </Text>
                            <Stack direction="row">
                                {topics.map((t) => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Heading variant="subtitle" fontSize="md">
                        {createdAtText} {createdAtText !== updatedAtText && `(Updated on ` + updatedAtText + ')'}
                    </Heading>
                </Stack>
                <Stack spacing="10">
                    <ChakraGatsbyImage image={getImage(heroImage)} alt={title} rounded="xl" zIndex="-1" />

                    <Stack spacing="6">
                        <Heading as="h2">Contents</Heading>
                        <Contents />
                        <Divider />
                    </Stack>

                    <Box ref={fromRef} />
                    <Flex>
                        <MarkdownRenderer w="full" pr={[0, null, 6]} markdown={copy.copy} />
                        {!isMobile && (
                            <Progress position="sticky" top="120" height={['80vh', null, '85vh']} amount={percentage} />
                        )}
                    </Flex>
                    <Box ref={toRef} />

                    {isMobile && (
                        <Box zIndex="1000">
                            <MotionFlex
                                position="fixed"
                                animate={{ bottom: isReturnButtonVisible ? 0 : -70, transition: { duration: 0.4 } }}
                                left="0"
                                right="0"
                                bottom="-100"
                                pb="4"
                                justifyContent="center"
                            >
                                <Button py="0" fontSize="sm" onClick={() => window.scrollTo(0, 0)}>
                                    Back to top
                                </Button>
                            </MotionFlex>
                        </Box>
                    )}

                    <Stack pt="12" direction={['column', null, 'row']}>
                        <Link fontSize="md" href={encodeURI(`https://twitter.com/search?q=${pageUrl}`)}>
                            Discuss on Twitter
                        </Link>
                        <Spacer />
                        <Link
                            fontSize="md"
                            href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${encodeURIComponent(
                                `I just read ${title} \nby @AdamMYoung_\n\n`
                            )}`}
                        >
                            Share on Twitter
                        </Link>
                    </Stack>

                    <Divider />
                    <Stack spacing="4">
                        <Text fontSize="md">Written by Adam Young</Text>
                        <Text fontSize="md" variant="subtitle">
                            Adam Young is a front-end engineer, who specializes in React and modern web technologies.
                            He's working at <Link href="https://curve.com">Curve</Link> as a front-end engineer. He
                            currently lives in Birmingham with his fiancé and two cats.
                        </Text>
                    </Stack>
                </Stack>
                {relatedBlogs.length > 0 && (
                    <>
                        <Divider />
                        <Heading>Related Articles</Heading>
                        <CardList>
                            {relatedBlogs.map(({ id, slug, createdAt, title, heroImage, copy }) => (
                                <BlogCard
                                    key={id}
                                    to={`/blog/${slug}`}
                                    title={title}
                                    subtitle={stringToLongDate(createdAt)}
                                    image={heroImage}
                                    readingTime={copy.readingTime}
                                />
                            ))}
                        </CardList>
                    </>
                )}
            </Layout>
        </ContentsProvider>
    );
};

export default BlogEntry;

export const query = graphql`
    query ($slug: String!, $topics: [String]!) {
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
                gatsbyImageData(height: 500, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
        matching: allContentfulPageBlogPost(
            filter: { topics: { in: $topics }, slug: { ne: $slug } }
            limit: 3
            sort: { fields: createdAt, order: DESC }
        ) {
            nodes {
                createdAt
                updatedAt
                id
                topics
                title
                slug
                copy {
                    copy
                    readingTime
                }
                heroImage {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
        notMatching: allContentfulPageBlogPost(
            filter: { topics: { nin: $topics }, slug: { ne: $slug } }
            limit: 3
            sort: { fields: createdAt, order: DESC }
        ) {
            nodes {
                createdAt
                updatedAt
                id
                topics
                title
                slug
                copy {
                    copy
                    readingTime
                }
                heroImage {
                    gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    }
`;
