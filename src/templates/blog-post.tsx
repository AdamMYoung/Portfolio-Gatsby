import { Box, Button, chakra, Divider, Heading, Spacer, Stack, Tag, Text, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState, VFC } from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { createContext } from '@chakra-ui/react-utils';

import { CardList } from '~components/card-list';
import { BlogCard } from '~components/blog-card';
import { Progress } from '~components/progress';
import { InteractionTag } from '~components/interaction-tag';
import { MarkdownRenderer } from '~components/markdown-renderer';
import { BlogPost } from '~types';
import { stringToLongDate } from '~utils/date';
import { getTwitterIntent } from '~utils/twitter';
import { LengthIcon } from '~views/length-icon';
import { SEO } from '~views/seo';
import { Contents } from '~views/contents';
import { useCombinedSubset, useIsMobile, useRelativeScrollPercentage } from '~hooks';
import { ContentsProvider } from '~providers';
import { MotionFlex } from '~components/motion';
import { Link } from '~components/link';

type BlogPostProps = {
    data: {
        contentfulPageBlogPost: BlogPost;
        matching: { nodes: BlogPost[] };
        notMatching: { nodes: BlogPost[] };
    };
};

const ChakraGatsbyImage = chakra(GatsbyImage);

const [BlogPostProvider, useBlogPost] = createContext<{ blogPost: BlogPost }>();

const getLength = (duration: number) => {
    if (duration < 5) {
        return 'short';
    }
    if (duration >= 5 && duration < 10) {
        return 'medium';
    }
    return 'long';
};

// SEO information of the blog post.
const BlogSEO: VFC = () => {
    const { blogPost } = useBlogPost();
    const { title, summary, heroImage, createdAt, updatedAt, topics, slug } = blogPost;

    return (
        <SEO
            title={title}
            description={summary.summary}
            canonical={`/blog/${slug}/`}
            imageUrl={heroImage.localFile.publicURL}
            imageAlt={title}
        >
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
                    image: [heroImage.localFile.publicURL],
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
    );
};

// Back navigation of the blog post.
const BlogNavigation: VFC = () => {
    return (
        <Stack spacing="6">
            <Box>
                <Link href="/blog" fontSize={['md', null, 'lg']} pl="0">
                    <ArrowBackIcon mb="1" />
                    {` Back to Blog`}
                </Link>
            </Box>
        </Stack>
    );
};

// Header and contents navigation of the blog post.
const BlogHeader: VFC = () => {
    const { blogPost } = useBlogPost();
    const { heroImage, title, copy, topics, createdAt, updatedAt } = blogPost;

    const createdAtText = stringToLongDate(createdAt);
    const updatedAtText = stringToLongDate(updatedAt);

    const duration = Number(copy.readingTime.replace(/\D+/g, ''));

    return (
        <>
            <Stack>
                <Heading>{title}</Heading>
                <Stack spacing={4}>
                    <Text variant="subtitle" fontSize="xl">
                        <LengthIcon length={getLength(duration)} /> {copy.readingTime}
                    </Text>
                    <Flex wrap="wrap" gap={2}>
                        {topics.map((t) => (
                            <InteractionTag href={`/blog?filters=${t}`} key={t}>
                                {t}
                            </InteractionTag>
                        ))}
                    </Flex>
                </Stack>
            </Stack>
            <Divider />
            <Heading variant="subtitle" fontSize="md">
                {createdAtText} {createdAtText !== updatedAtText && `(Updated on ` + updatedAtText + ')'}
            </Heading>
            <ChakraGatsbyImage image={getImage(heroImage.localFile)} alt={title} rounded="xl" zIndex="-1" />

            <Stack spacing="6">
                <Heading as="h2">Contents</Heading>
                <Contents />
                <Divider />
            </Stack>
        </>
    );
};

// The main blog copy of the page.
const BlogContent: VFC = () => {
    const { blogPost } = useBlogPost();
    const { copy } = blogPost;

    const isMobile = useIsMobile();
    const [isReturnButtonVisible, setReturnButtonVisible] = useState(false);
    const [fromRef, toRef, { percentage }] = useRelativeScrollPercentage<HTMLDivElement, HTMLDivElement>(400);

    useEffect(() => setReturnButtonVisible(percentage > 20), [percentage, isReturnButtonVisible]);

    return (
        <>
            <Box ref={fromRef} />
            <Flex>
                <MarkdownRenderer w="full" pr={[0, null, 6]} markdown={copy.copy} />
                {!isMobile && (
                    <Progress
                        position="sticky"
                        top="120"
                        height={['80vh', null, '85vh']}
                        aria-label="Article progress"
                        amount={percentage}
                    />
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
        </>
    );
};

// Social links displayed under the blog content.
export const BlogSocial: VFC = () => {
    const { blogPost } = useBlogPost();
    const { slug, title } = blogPost;

    const pageUrl = `https://aydev.uk/blog/${slug}`;

    return (
        <Stack pt="12" direction={['column', null, 'row']}>
            <Link fontSize="md" href={encodeURI(`https://twitter.com/search?q=${pageUrl}`)}>
                Discuss on Twitter
            </Link>
            <Spacer />
            <Link fontSize="md" href={getTwitterIntent(pageUrl, `I just read ${title} \nby @AdamMYoung_\n\n`)}>
                Share on Twitter
            </Link>
        </Stack>
    );
};

const BlogEntry: VFC<BlogPostProps> = ({ data }) => {
    const relatedBlogs = useCombinedSubset(3, [data.matching.nodes, data.notMatching.nodes]);

    return (
        <ContentsProvider>
            <BlogPostProvider value={{ blogPost: data.contentfulPageBlogPost }}>
                <Stack spacing="12">
                    <BlogSEO />
                    <BlogNavigation />

                    <Stack spacing="10">
                        <BlogHeader />
                        <BlogContent />
                        <BlogSocial />

                        <Divider />
                        <Stack spacing="4">
                            <Text fontSize="md">Written by Adam Young</Text>
                            <Text fontSize="md" variant="subtitle">
                                Adam Young is a front-end engineer, who specializes in React and modern web
                                technologies. He's working at <Link href="https://curve.com">Curve</Link> as a front-end
                                engineer. He currently lives in Birmingham with his fiancé and two cats.
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
                                        image={heroImage.localFile}
                                        readingTime={copy.readingTime}
                                    />
                                ))}
                            </CardList>
                        </>
                    )}
                </Stack>
            </BlogPostProvider>
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
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(height: 500)
                    }
                }
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
                    localFile {
                        childImageSharp {
                            gatsbyImageData(width: 600)
                        }
                    }
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
                    localFile {
                        childImageSharp {
                            gatsbyImageData(width: 600)
                        }
                    }
                }
            }
        }
    }
`;
