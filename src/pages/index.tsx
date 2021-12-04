import React, { VFC } from 'react';
import { Box, Button, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { Link, ThreePanel, ThreePanelBlock, ThreePanelImage, ThreePanelSubtitle, ThreePanelTitle } from '../components';
import { Hero, HeroImage, HeroBlock, HeroTitle, HeroSubtitle } from '../components/sections/hero';
import { FeaturedArticleCard, Layout } from '../views';
import { Card } from '../components/card';

const HeroIntro = () => {
    return (
        <Hero>
            <HeroBlock spacing="8">
                <Stack>
                    <HeroTitle>Adam Young</HeroTitle>
                    <Text>/ˈædəm jʌŋ/</Text>
                    <Text variant="subtitle" as="i" fontWeight="semibold">
                        noun
                    </Text>
                    <Text pl="4">
                        A front-end software engineer, passionate about creating engaging web experiences in React,
                        Gatsby and Next.js. Currently working at{' '}
                        <Link target="_black" rel="noopener" href="https://curve.com">
                            Curve
                        </Link>
                        .
                    </Text>
                </Stack>
                <Stack spacing="4">
                    <Button as={Link} href="/blog">
                        Read the blog
                    </Button>
                    <Button as={Link} variant="outline" href="#about-me">
                        About Me
                    </Button>
                </Stack>
            </HeroBlock>

            <HeroImage src="https://via.placeholder.com/700" />
        </Hero>
    );
};

const Interests: VFC = () => {
    return (
        <Stack spacing="8">
            <Heading fontSize="5xl" textAlign="center" id="about-me">
                What am I <i>into</i>?
            </Heading>

            <ThreePanel>
                <ThreePanelBlock>
                    <ThreePanelImage src="https://via.placeholder.com/700" />
                    <Stack>
                        <ThreePanelTitle>Programming</ThreePanelTitle>
                        <ThreePanelSubtitle>
                            Currently a Software Engineer at <Link href="https://curve.com">Curve</Link>.
                        </ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <ThreePanelImage src="https://via.placeholder.com/700" />
                    <Stack>
                        <ThreePanelTitle>Photography</ThreePanelTitle>
                        <ThreePanelSubtitle>My reason to head outside.</ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <ThreePanelImage src="https://via.placeholder.com/700" />
                    <Stack>
                        <ThreePanelTitle>3D Printing</ThreePanelTitle>
                        <ThreePanelSubtitle>Building the weirdest stuff.</ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <ThreePanelImage src="https://via.placeholder.com/700" />
                    <Stack>
                        <ThreePanelTitle>Cats</ThreePanelTitle>
                        <ThreePanelSubtitle>How could I not include them?</ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
            </ThreePanel>
        </Stack>
    );
};

const WhoAmI = () => {
    return (
        <Hero>
            <HeroImage alignSelf="center" src="https://via.placeholder.com/700" />
            <HeroBlock mt={[8, null, 0]} mr={0} ml={[0, null, 16]}>
                <HeroTitle>Who am I?</HeroTitle>
                <HeroSubtitle fontSize="2xl">I was born in 1997, in the North East of England. </HeroSubtitle>
                <Text>
                    I attended Teesside University, and graduated in 2018 with a Bachelors in Computer Science. During
                    my final year of university is when I first started with React, and I've been obsessed with web
                    technologies ever since.
                </Text>
                <Text>
                    From there, I moved to Birmingham with my partner, and started my career. I worked at a local
                    software development house as a full stack developer for around 2 years, working with mapping
                    libraries and design systems before moving into a fully front-end role at Curve.
                </Text>
            </HeroBlock>
        </Hero>
    );
};

const StuffUsed = () => {
    return (
        <Hero>
            <HeroImage src="https://via.placeholder.com/700" />
            <HeroBlock spacing="12" mr={0} ml={[0, null, 16]}>
                <Stack spacing="4">
                    <HeroTitle>Curious about what I use?</HeroTitle>
                    <HeroSubtitle>
                        I've got a "uses" page listing my tooling for development, as well as any other hobbies at the
                        link below.
                    </HeroSubtitle>
                </Stack>
                <Button as={Link} variant="outline" href="/uses">
                    My Uses
                </Button>
            </HeroBlock>
        </Hero>
    );
};

const Index: VFC = () => {
    return (
        <Layout>
            <HeroIntro />
            <WhoAmI />
            <Interests />
            <FeaturedArticleCard />
            <StuffUsed />
        </Layout>
    );
};

export default Index;
