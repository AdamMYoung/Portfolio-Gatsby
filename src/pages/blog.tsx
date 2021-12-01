import React, { VFC } from 'react';
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { Layout } from '../views';
import { CategoryList, CategoryListItem, Link } from '../components';
import { Hero, HeroImage, HeroPanel, HeroSubtitle, HeroTitle } from '../components/sections/hero';

const HeroIntro = () => {
    return (
        <Hero>
            <HeroPanel spacing="6">
                <HeroTitle>Learn development tips and tricks.</HeroTitle>
                <HeroSubtitle>Check out the articles below.</HeroSubtitle>

                <Input borderRadius="full" placeholder="Search for an article" />
            </HeroPanel>

            <HeroImage src="https://via.placeholder.com/700" />
        </Hero>
    );
};

const categories = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

const Blogs = () => {
    return (
        <Stack spacing="8">
            <Heading>Filter articles by topic</Heading>
            <CategoryList onCategoriesChanged={console.log}>
                {categories.map((c) => (
                    <CategoryListItem categoryKey={c} key={c}>
                        {c}
                        {c}
                        {c}
                    </CategoryListItem>
                ))}
            </CategoryList>
            <Heading variant="subtitle">
                Prefer an{' '}
                <Link color="red.400" variant="animate-ltr">
                    RSS Feed
                </Link>
                ?
            </Heading>
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
