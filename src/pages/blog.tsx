import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, VFC } from 'react';
import { BlogCard } from '~components/blog-card';
import { CardList } from '~components/card-list';
import { CategoryList, CategoryListItem } from '~components/category-list';
import { Link } from '~components/link';
import { BlogSearchModal } from '~components/modals';
import { getItemMotion, MotionHeading, useViewportTransition } from '~components/motion';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { useArrayLimiter, useIfClient, useParamsEvent } from '~hooks';
import { useBlogTopics } from '~hooks/static-queries';
import { BlogSearchProvider, useBlogFilter, useBlogIndex } from '~providers';
import { stringToLongDate } from '~utils/date';
import { FeaturedArticleCard } from '~views/featured-article-card';
import { SEO } from '~views/seo';

const BlogIntro = () => {
    const { isIndexLoaded } = useBlogIndex();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { results, selectedFilters, onReset } = useBlogFilter();

    const hasNoResults = results.length === 0;
    const isTopicsSelected = selectedFilters.length > 0;

    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle as="h1">Learn development tips and tricks.</TwoPanelTitle>
                    <TwoPanelSubtitle>Check out the articles below.</TwoPanelSubtitle>
                </TwoPanelHeading>
                <Stack pt="4" spacing="4">
                    <TwoPanelBody>
                        <Button leftIcon={<SearchIcon />} w="full" rounded="full" onClick={onOpen}>
                            Search for an article
                        </Button>
                    </TwoPanelBody>
                    <TwoPanelBody>
                        <Button as={Link} w="full" variant="outline" href="#articles" isDisabled={hasNoResults}>
                            {!isTopicsSelected
                                ? 'View All Articles'
                                : hasNoResults
                                ? 'No Articles Found'
                                : `View ${results.length} ${results.length === 1 ? 'Article' : 'Articles'} `}
                        </Button>
                    </TwoPanelBody>
                    <TwoPanelBody>
                        <Button variant="ghost" w="full" onClick={onReset} opacity={!isTopicsSelected ? 0 : 1}>
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
            {isIndexLoaded && <BlogSearchModal isOpen={isOpen} onClose={onClose} />}
        </TwoPanel>
    );
};

const BlogPost = () => {
    const { results, applicableFilters, selectedFilters, onFilterToggled } = useBlogFilter();
    const topics = useBlogTopics();

    const [visibleArticles, isAllArticlesVisible, loadMoreArticles, reset] = useArrayLimiter(results);

    useEffect(() => reset(), [results]);

    //Filters the blog posts based on the search term if applicable.
    useParamsEvent('filters', (matched) => {
        matched.forEach(onFilterToggled);
        useIfClient(() => document.getElementById('filters').scrollIntoView({ behavior: 'smooth' }));
    });

    return (
        <Stack spacing="8">
            <MotionHeading py="2" variants={getItemMotion()} {...useViewportTransition(true, 0.7)}>
                Filter articles by topic
            </MotionHeading>

            <CategoryList id="filters">
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
    return (
        <Stack spacing={[16, null, 24]}>
            <BlogSearchProvider>
                <SEO
                    title="Blog"
                    description="The AYDev Blog. Find tips and guides across web development right here."
                    canonical="/blog/"
                />
                <BlogIntro />
                <BlogPost />
            </BlogSearchProvider>
        </Stack>
    );
};

export default Blog;
