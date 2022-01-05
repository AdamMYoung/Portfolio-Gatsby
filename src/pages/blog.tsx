import { Box, Button, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, VFC } from 'react';

import {
    CardList,
    CategoryList,
    CategoryListItem,
    Link,
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
    BlogCard,
} from '~components';
import { useArrayLimiter } from '~hooks';
import { useBlogTopics, useSiteInfo } from '~hooks/static-queries';
import { FeaturedArticleCard, Layout, SEO } from '~views';
import { stringToLongDate } from '~utils/date';
import { BlogSearchProvider, useBlogSearch } from '~providers';
import { getItemMotion, MotionHeading, useViewportTransition } from '~components/motion';

const BlogIntro = () => {
    const { onSearchTermChanged, searchTerm, results, selectedFilters, onReset } = useBlogSearch();

    const hasNoResults = results.length === 0;
    const isTopicsSelected = selectedFilters.length > 0;
    const isSearchResultPresent = !!searchTerm;

    const hasUserInput = isSearchResultPresent || isTopicsSelected;

    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle as="h1">Learn development tips and tricks.</TwoPanelTitle>
                    <TwoPanelSubtitle>Check out the articles below.</TwoPanelSubtitle>
                </TwoPanelHeading>
                <Stack pt="4" spacing="4">
                    <TwoPanelBody>
                        <Input
                            w="full"
                            value={searchTerm}
                            placeholder="Search for an article"
                            rounded="full"
                            onChange={(e) => onSearchTermChanged(e.target.value)}
                        />
                    </TwoPanelBody>
                    <TwoPanelBody>
                        <Button as={Link} w="full" variant="outline" href="#articles" isDisabled={hasNoResults}>
                            {!hasUserInput
                                ? 'View All Articles'
                                : hasNoResults
                                ? 'No Articles Found'
                                : `View ${results.length} ${results.length === 1 ? 'Article' : 'Articles'} `}
                        </Button>
                    </TwoPanelBody>
                    <TwoPanelBody>
                        <Button variant="ghost" w="full" onClick={onReset} opacity={!hasUserInput ? 0 : 1}>
                            Reset Search
                        </Button>
                    </TwoPanelBody>
                </Stack>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ borderRadius: '12px' }}
                    src="../images/blog.jpg"
                    alt="Hands ready to type on a laptop"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const BlogPost = () => {
    const { results, applicableFilters, selectedFilters, onFilterToggled } = useBlogSearch();
    const topics = useBlogTopics();

    const [visibleArticles, isAllArticlesVisible, loadMoreArticles, reset] = useArrayLimiter(results);

    useEffect(() => reset(), [results]);

    return (
        <Stack spacing="8">
            <MotionHeading py="2" variants={getItemMotion()} {...useViewportTransition(true, 0.7)}>
                Filter articles by topic
            </MotionHeading>

            <CategoryList>
                {topics.map((topic) => (
                    <CategoryListItem
                        key={topic}
                        onClick={() => onFilterToggled(topic)}
                        isActive={selectedFilters.includes(topic)}
                        isDisabled={!applicableFilters.includes(topic)}
                    >
                        {topic}
                    </CategoryListItem>
                ))}
            </CategoryList>
            {selectedFilters.length === 0 && <FeaturedArticleCard />}
            <CardList id="articles">
                {visibleArticles.map(({ id, title, slug, heroImage, createdAt, copy }) => {
                    return (
                        <BlogCard
                            key={id}
                            to={`/blog/${slug}`}
                            title={title}
                            subtitle={stringToLongDate(createdAt)}
                            image={heroImage.localFile}
                            readingTime={copy?.readingTime}
                        />
                    );
                })}
            </CardList>
            {!isAllArticlesVisible && (
                <Box>
                    <Button onClick={loadMoreArticles}>Load more articles</Button>
                </Box>
            )}
            <Text variant="subtitle" fontSize="lg" lineHeight={['1.3', null, '1.12']}>
                Prefer an{' '}
                <Link color="red.400" variant="animate-ltr" href="/rss.xml">
                    RSS Feed
                </Link>
                ?
            </Text>
        </Stack>
    );
};

const Blog: VFC = () => {
    const { siteMetadata } = useSiteInfo();

    return (
        <Layout>
            <BlogSearchProvider>
                <SEO
                    title="Blog"
                    description="The AYDev Blog. Find tips and guides across web development right here."
                    canonical="/blog/"
                />
                <BlogIntro />
                <BlogPost />
            </BlogSearchProvider>
        </Layout>
    );
};

export default Blog;
