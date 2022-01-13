import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import { Link } from '~components/link';
import { LinkButton } from '~components/link-button';
import { ThreePanel, ThreePanelBlock, ThreePanelSubtitle, ThreePanelTitle } from '~components/sections/three-panel';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { getItemMotion, MotionHeading, useViewportTransition } from '~components/motion';
import { FeaturedArticleCard } from '~views/featured-article-card';
import { SEO } from '~views/seo';

const HomeIntro = () => {
    return (
        <TwoPanel>
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
                        <LinkButton w="full" variant="outline" href="#about-me">
                            About Me
                        </LinkButton>
                    </TwoPanelBody>
                </Stack>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/me.jpg"
                    alt="A self portrait of me and my partner"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const HomeInterests: VFC = () => {
    return (
        <Stack spacing="8">
            <MotionHeading
                variants={getItemMotion()}
                {...useViewportTransition(true, 1)}
                as="h2"
                fontSize={['4xl', null, '5xl']}
                textAlign={['left', null, 'center']}
            >
                What am I <i>into</i>?
            </MotionHeading>

            <ThreePanel>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        src="../images/laptop-on-table.jpeg"
                        alt="Laptop on a table, with code on the screen."
                        width={400}
                        height={275}
                    />

                    <Stack>
                        <ThreePanelTitle as="h3">Programming</ThreePanelTitle>
                        <ThreePanelSubtitle>
                            Currently a Software Engineer at <Link href="https://curve.com">Curve</Link>, and on some{' '}
                            <Link href="/projects">public projects</Link>.
                        </ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        src="../images/photography.jpg"
                        alt="An image of a DSLR camera."
                        width={400}
                        height={275}
                    />
                    <Stack>
                        <ThreePanelTitle as="h3">Photography</ThreePanelTitle>
                        <ThreePanelSubtitle>
                            Check out my <Link href="https://unsplash.com/@adammyoung">Unsplash</Link> page.
                        </ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        src="../images/3d-printing.jpg"
                        alt="A 3D printer midway through printing."
                        width={400}
                        height={275}
                    />
                    <Stack>
                        <ThreePanelTitle as="h3">3D Printing</ThreePanelTitle>
                        <ThreePanelSubtitle>
                            Find my designs on the <Link href="/prints">prints page</Link>.
                        </ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
                <ThreePanelBlock>
                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        src="../images/cats.jpg"
                        alt="Two cats, one black one tabby, laying together in a cat bed."
                        width={400}
                        height={275}
                        objectFit="cover"
                    />
                    <Stack>
                        <ThreePanelTitle as="h3">Cats</ThreePanelTitle>
                        <ThreePanelSubtitle>
                            My two cats, <i>Arlo</i> and <i>Theo</i>.
                        </ThreePanelSubtitle>
                    </Stack>
                </ThreePanelBlock>
            </ThreePanel>
        </Stack>
    );
};

const HomeWhoAmI = () => {
    return (
        <TwoPanel id="about-me">
            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/ne-england.jpg"
                    alt="A scenic picture of the english countryside"
                    width={900}
                />
            </TwoPanelImage>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle>Who am I?</TwoPanelTitle>
                    <TwoPanelSubtitle>I was born in 1997, in the North East of England.</TwoPanelSubtitle>
                </TwoPanelHeading>
                <Stack spacing="4">
                    <TwoPanelBody>
                        <Text>
                            I attended Teesside University, and graduated in 2018 with a Bachelors in Computer Science.
                            During my final year of university is when I first started with React, and I've been
                            obsessed with web technologies ever since.
                        </Text>
                    </TwoPanelBody>
                    <TwoPanelBody>
                        <Text>
                            From there, I moved to Birmingham with my partner, and started my software development
                            career. I worked at a local software development house as a full stack developer for around
                            2 years, working with mapping libraries and design systems before moving into a fully
                            front-end role at Curve.
                        </Text>
                    </TwoPanelBody>
                </Stack>
            </TwoPanelBlock>
        </TwoPanel>
    );
};

const HomeStuffUsed = () => {
    return (
        <TwoPanel>
            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/edc.jpg"
                    alt="Various everyday items, such as a watch, wallet and laptop"
                    width={1200}
                />
            </TwoPanelImage>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle>
                        What do I <i>use</i>?
                    </TwoPanelTitle>
                    <TwoPanelSubtitle>
                        I've got a uses page listing everything I use day-to-day at the link below.
                    </TwoPanelSubtitle>
                </TwoPanelHeading>
                <TwoPanelBody>
                    <Button as={Link} w="full" variant="outline" href="/uses">
                        My Uses
                    </Button>
                </TwoPanelBody>
            </TwoPanelBlock>
        </TwoPanel>
    );
};

const Index: VFC = () => {
    return (
        <Stack spacing={[16, null, 24]}>
            <SEO
                title="Home"
                description="Hi, I'm Adam Young, a Software Engineer from Birmingham currently working at Curve. Here, you'll find articles about software development, my interests, and the projects I've currently got on the go."
                canonical="/"
            />
            <HomeIntro />
            <HomeWhoAmI />
            <HomeInterests />
            <FeaturedArticleCard />
            <HomeStuffUsed />
        </Stack>
    );
};

export default Index;
