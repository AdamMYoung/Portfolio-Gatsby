import { Box, Button, Divider, Flex, Grid, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import { Link } from '~components/link';
import { LinkButton } from '~components/link-button';
import { TwoPanel, TwoPanelBlock, TwoPanelBody, TwoPanelImage, TwoPanelTitle } from '~components/sections/two-panel';
import { FeaturedArticleCard } from '~views/featured-article-card';
import { Layout } from '~views/layout';
import { NewsletterSubscription } from '~views/newsletter-subscription';
import { SEO } from '~views/seo';

const HomeIntro: VFC = () => {
    return (
        <TwoPanel disableMotion>
            <TwoPanelBlock>
                <Stack>
                    <TwoPanelTitle as="h1">Adam Young</TwoPanelTitle>
                    <TwoPanelBody as={Stack}>
                        <Text>/ˈædəm jʌŋ/</Text>
                        <Text variant="subtitle" as="i" fontWeight="semibold">
                            noun
                        </Text>
                        <Text pl="4">
                            A front-end software engineer, passionate about creating engaging web experiences in React,
                            Gatsby and Next.js. Currently working at <Link href="https://curve.com">Curve</Link>.
                        </Text>
                    </TwoPanelBody>
                </Stack>
                <Stack spacing="4">
                    <TwoPanelBody>
                        <LinkButton w="full" href="/blog">
                            Read the blog
                        </LinkButton>
                    </TwoPanelBody>
                    <TwoPanelBody>
                        <LinkButton w="full" variant="outline" href="/about">
                            About Me
                        </LinkButton>
                    </TwoPanelBody>
                </Stack>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/me.jpg"
                    alt="A covered-up self portrait of me, taking a picture with a DSLR in a mirror"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

// Will add recommendations when I actually get some!
const HomeRecommendations: VFC = () => {
    return <Grid gridTemplateColumns={['1fr', null, '1fr 1fr']}></Grid>;
};

const Index: VFC = () => {
    return (
        <Layout>
            <Stack spacing={[16, null, 24]}>
                <SEO
                    title="Home"
                    description="Hi, I'm Adam Young, a Software Engineer from Birmingham currently working at Curve. Here, you'll find articles about software development, my interests, and the projects I've currently got on the go."
                    canonical="/"
                />
                <HomeIntro />
                {/* <HomeRecommendations /> */}
                <FeaturedArticleCard />
                <Divider />
                <NewsletterSubscription />
            </Stack>
        </Layout>
    );
};

export default Index;
