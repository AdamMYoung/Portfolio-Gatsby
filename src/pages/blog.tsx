import React, { useState, VFC } from 'react';
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { BlogCard, Layout } from '../views';
import { CardList, CategoryList, CategoryListItem, Link } from '../components';
import { Hero, HeroImage, HeroPanel, HeroSubtitle, HeroTitle } from '../components/sections/hero';
import { useBlogPosts } from '../hooks/static-queries/use-blog-posts';
import { stringToLongDate } from '../utils/date';
import { useArrayLimiter } from '../hooks';
import { useBlogTopics } from '../hooks/static-queries/use-blog-topics';

const HeroIntro = () => {
    return (
        <Hero>
            <HeroPanel spacing="12">
                <Stack>
                    <HeroTitle>Learn development tips and tricks.</HeroTitle>
                    <HeroSubtitle>Check out the articles below.</HeroSubtitle>
                </Stack>
                <Input borderRadius="full" placeholder="Search for an article" />
            </HeroPanel>

            <HeroImage src="https://via.placeholder.com/700" />
        </Hero>
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
                {blogTopics.map((c) => (
                    <CategoryListItem categoryKey={c} key={c}>
                        {c}
                    </CategoryListItem>
                ))}
            </CategoryList>
            <CardList>
                {visibleArticles.map(({ id, title, slug, heroImage, createdAt }) => (
                    <BlogCard
                        key={id}
                        to={`/blog/${slug}`}
                        title={title}
                        subtitle={stringToLongDate(createdAt)}
                        image={heroImage}
                    />
                ))}
            </CardList>
            {!isAllArticlesVisible && (
                <Box>
                    <Button onClick={loadMoreArticles}>Load more articles</Button>
                </Box>
            )}
            <Text variant="subtitle" fontSize="lg" lineHeight="1.12">
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
            <HeroIntro />
            <Blogs />
        </Layout>
    );
};

export default Blog;
