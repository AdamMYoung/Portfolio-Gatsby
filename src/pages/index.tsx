import { Box, chakra, Divider, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Card } from '~components/card';

import { Link } from '~components/link';
import { LinkButton } from '~components/link-button';
import { MarkdownRenderer } from '~components/markdown-renderer';
import { TwoPanel, TwoPanelBlock, TwoPanelBody, TwoPanelImage, TwoPanelTitle } from '~components/sections/two-panel';
import { useRecommendations } from '~hooks/static-queries';
import { FeaturedArticleCard } from '~views/featured-article-card';
import { Layout } from '~views/layout';
import { NewsletterSubscription } from '~views/newsletter-subscription';
import { SEO } from '~views/seo';

const ChakraGatsbyImage = chakra(GatsbyImage);

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

const HomeRecommendations: VFC = () => {
    const recommendations = useRecommendations();

    return (
        <Grid gridTemplateColumns={['1fr', null, '1fr 1fr']} gap={[4, null, 8]}>
            {recommendations.map(({ profilePicture, name, text, role, company }) => (
                <Card key={name}>
                    <Stack spacing="4">
                        <HStack spacing={4}>
                            <ChakraGatsbyImage
                                image={getImage(profilePicture)}
                                alt={name}
                                w="12"
                                h="12"
                                rounded="full"
                            />
                            <Stack spacing="1">
                                <Heading fontSize="lg" fontWeight="semibold">
                                    {name}
                                </Heading>
                                <Text fontSize="sm" fontWeight="semibold" variant="subtitle">
                                    {role}, {company}
                                </Text>
                            </Stack>
                        </HStack>

                        <MarkdownRenderer fontSize="sm" markdown={text} />
                    </Stack>
                </Card>
            ))}
        </Grid>
    );
};

const Index: VFC = () => {
    return (
        <Layout>
            <Stack spacing={[16, null, 24]}>
                <SEO
                    title="Home"
                    description="Hi, I'm Adam Young, a Software Engineer based in Darlington, currently working at Curve. Here, you'll find articles about software development, my interests, and the projects I've currently got on the go."
                    canonical="/"
                />
                <HomeIntro />
                <HomeRecommendations />
                <FeaturedArticleCard />
                <Divider />
                <NewsletterSubscription />
            </Stack>
        </Layout>
    );
};

export default Index;
