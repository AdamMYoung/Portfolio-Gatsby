import React, { useState, VFC } from 'react';
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { BlogCard, FeaturedArticleCard, Layout } from '../views';
import { CardList, CategoryList, CategoryListItem, Link } from '../components';
import {
    TwoPanel,
    TwoPanelImage,
    TwoPanelBlock,
    TwoPanelHeading,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '../components/sections/two-panel';
import { useBlogPosts } from '../hooks/static-queries/use-blog-posts';
import { stringToLongDate } from '../utils/date';
import { useArrayLimiter } from '../hooks';
import { useBlogTopics } from '../hooks/static-queries/use-blog-topics';
import { StaticImage } from 'gatsby-plugin-image';

const HeroIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle>Learn development tips and tricks.</TwoPanelTitle>
                    <TwoPanelSubtitle>Check out the articles below.</TwoPanelSubtitle>
                </TwoPanelHeading>
                <Stack pt="4" spacing="4">
                    <Input borderRadius="full" placeholder="Search for an article" />
                    <Button as={Link} variant="outline" href="#articles">
                        View Articles
                    </Button>
                </Stack>
            </TwoPanelBlock>

            <StaticImage style={{ borderRadius: '12px' }} placeholder="blurred" src="../images/blog.jpg" alt="" />
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
            <HeroIntro />
            <Blogs />
        </Layout>
    );
};

export default Blog;
