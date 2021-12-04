import React, { VFC } from 'react';
import { Button, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { Link, ThreePanel, ThreePanelBlock, ThreePanelImage, ThreePanelSubtitle, ThreePanelTitle } from '../components';
import {
    TwoPanel,
    TwoPanelImage,
    TwoPanelBlock,
    TwoPanelTitle,
    TwoPanelSubtitle,
    TwoPanelHeading,
} from '../components/sections/two-panel';
import { FeaturedArticleCard, Layout } from '../views';
import { StaticImage } from 'gatsby-plugin-image';
import { SEO } from '../views/seo/SEO';

const HeroIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <Stack>
                    <TwoPanelTitle as="h1">Adam Young</TwoPanelTitle>
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
            </TwoPanelBlock>

            <StaticImage
                style={{ borderRadius: '12px' }}
                placeholder="blurred"
                src="../images/me.jpg"
                alt="A self portrait of me and my partner"
            />
        </TwoPanel>
    );
};

const Interests: VFC = () => {
    return (
        <Stack spacing="8">
            <Heading as="h2" fontSize={['4xl', null, '5xl']} textAlign={['left', null, 'center']}>
                What am I <i>into</i>?
            </Heading>

            <ThreePanel>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        placeholder="blurred"
                        src="../images/laptop-on-table.jpeg"
                        alt="Laptop on a table, with code on the screen."
                    />

                    <Stack>
                        <ThreePanelTitle as="h3">Programming</ThreePanelTitle>
                        <ThreePanelSubtitle>
                            Currently a Software Engineer at <Link href="https://curve.com">Curve</Link>.
                        </ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        placeholder="blurred"
                        src="../images/photography.jpg"
                        alt="An image of a DSLR camera."
                    />
                    <Stack>
                        <ThreePanelTitle as="h3">Photography</ThreePanelTitle>
                        <ThreePanelSubtitle>My reason to head outside.</ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        placeholder="blurred"
                        src="../images/3d-printing.jpg"
                        alt="A 3D printer midway through printing."
                    />
                    <Stack>
                        <ThreePanelTitle as="h3">3D Printing</ThreePanelTitle>
                        <ThreePanelSubtitle>Building the weirdest stuff.</ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        placeholder="blurred"
                        src="../images/cats.jpg"
                        alt="Two cats, one black one tabby, laying together in a cat bed."
                    />
                    <Stack>
                        <ThreePanelTitle as="h3">Cats</ThreePanelTitle>
                        <ThreePanelSubtitle>How could I not include them?</ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
            </ThreePanel>
        </Stack>
    );
};

const WhoAmI = () => {
    return (
        <TwoPanel id="about-me">
            <StaticImage
                style={{ borderRadius: '12px' }}
                placeholder="blurred"
                src="../images/ne-england.jpg"
                alt="A scenic picture of the english countryside"
            />
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle>Who am I?</TwoPanelTitle>
                    <TwoPanelSubtitle>I was born in 1997, in the North East of England.</TwoPanelSubtitle>
                </TwoPanelHeading>
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
            </TwoPanelBlock>
        </TwoPanel>
    );
};

const StuffUsed = () => {
    return (
        <TwoPanel>
            <StaticImage
                style={{ borderRadius: '12px' }}
                placeholder="blurred"
                src="../images/edc.jpg"
                alt="Various everyday items, such as a watch, wallet and laptop"
            />
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle>Curious about what I use?</TwoPanelTitle>
                    <TwoPanelSubtitle>
                        I've got a "uses" page listing everything I use day-to-day at the link below.
                    </TwoPanelSubtitle>
                </TwoPanelHeading>

                <Button as={Link} variant="outline" href="/uses">
                    My Uses
                </Button>
            </TwoPanelBlock>
        </TwoPanel>
    );
};

const Index: VFC = () => {
    return (
        <Layout>
            <SEO title="Home" description="The home page of AYDev" />
            <HeroIntro />
            <WhoAmI />
            <Interests />
            <FeaturedArticleCard />
            <StuffUsed />
        </Layout>
    );
};

export default Index;
