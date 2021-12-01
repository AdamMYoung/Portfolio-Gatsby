import React, { VFC } from 'react';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { Link } from '../components';
import { Hero, HeroImage, HeroPanel, HeroSubtitle, HeroTitle } from '../components/sections/hero';
import { Layout } from '../views';

const HeroIntro = () => {
    return (
        <Hero>
            <HeroPanel spacing="6">
                <Stack>
                    <HeroTitle>Adam Young</HeroTitle>
                    <Text>/ˈædəm jʌŋ/</Text>
                    <Text variant="subtitle" as="i" fontWeight="semibold">
                        noun
                    </Text>
                    <Text pl="4">
                        A front-end software engineer, passionate about creating engaging web experiences in React,
                        Gatsby and Next.js. Working at{' '}
                        <Link target="_black" rel="noopener" href="https://curve.com">
                            Curve.com
                        </Link>
                        , developing the next generation of the company’s website.
                    </Text>
                </Stack>
                <Stack spacing="4">
                    <Button as={Link} href="/blog">
                        Read the blog
                    </Button>
                    <Button as={Link} variant="outline" href="/about">
                        About Me
                    </Button>
                </Stack>
            </HeroPanel>

            <HeroImage src="https://via.placeholder.com/700" />
        </Hero>
    );
};

const Index: VFC = () => {
    return (
        <Layout>
            <HeroIntro />
        </Layout>
    );
};

export default Index;
