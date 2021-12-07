import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, VFC } from 'react';

import { CardList, CategoryList, CategoryListItem, Link } from '../components';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelHeading,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '../components/sections/two-panel';
import { useArrayLimiter } from '../hooks';
import { useBlogPosts } from '../hooks/static-queries/use-blog-posts';
import { useBlogTopics } from '../hooks/static-queries/use-blog-topics';
import { stringToLongDate } from '../utils/date';
import { BlogCard, FeaturedArticleCard, Layout } from '../views';
import { SEO } from '../views/seo/SEO';

const HeroIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle as="h1">Learn development tips and tricks.</TwoPanelTitle>
                    <TwoPanelSubtitle>Check out the articles below.</TwoPanelSubtitle>
                </TwoPanelHeading>
                <Stack pt="4" spacing="4">
                    <Button as={Link} variant="outline" href="#articles">
                        View Articles
                    </Button>
                </Stack>
            </TwoPanelBlock>

            <StaticImage
                style={{ borderRadius: '12px' }}
                placeholder="blurred"
                src="../images/blog.jpg"
                alt="Hands ready to type on a laptop"
                width={900}
            />
        </TwoPanel>
    );
};

const Blogs = () => {
    const blogPosts = useBlogPosts();
    const blogTopics = useBlogTopics();

    const [blogFilters, setBlogFilters] = useState<string[]>([]);

    const filteredArticles =
        blogFilters.length === 0
            ? blogPosts
            : blogPosts.filter((post) => !!post.topics.find((t) => blogFilters.includes(t)));

    const [visibleArticles, isAllArticlesVisible, loadMoreArticles] = useArrayLimiter(filteredArticles);

    return (
        <Stack spacing="8">
            <Heading>Filter articles by topic</Heading>
            <CategoryList onCategoriesChanged={setBlogFilters}>
                {blogTopics.map((topic) => (
                    <CategoryListItem categoryKey={topic} key={topic}>
                        {topic}
                    </CategoryListItem>
                ))}
            </CategoryList>
            <FeaturedArticleCard />
            <CardList id="articles">
                {visibleArticles.map(({ id, title, slug, heroImage, createdAt, copy }) => {
                    return (
                        <BlogCard
                            key={id}
                            to={`/blog/${slug}`}
                            title={title}
                            subtitle={stringToLongDate(createdAt)}
                            image={heroImage}
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
        <Layout>
            <SEO title="Blog" description="The AYDev Blog. Find tips and guides across web development right here." />
            <HeroIntro />
            <Blogs />
        </Layout>
    );
};

export default Blog;
