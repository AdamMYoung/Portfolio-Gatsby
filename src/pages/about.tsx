import { Button, Stack, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Link } from '~components/link';
import { LinkButton } from '~components/link-button';
import { getItemMotion, MotionHeading, useViewportTransition } from '~components/motion';
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
import { Layout } from '~views/layout';
import { SEO } from '~views/seo';

const AboutIntro = () => {
    return (

        <TwoPanel disableMotion>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle as="h1">About Me</TwoPanelTitle>
                    <TwoPanelSubtitle>
                        My history, background, interests and everything else you need to know.
                    </TwoPanelSubtitle>
                </TwoPanelHeading>
                <TwoPanelBody>
                    <Stack spacing="4">
                        <LinkButton w="full" href="/">
                            Home
                        </LinkButton>
                        <LinkButton variant="outline" w="full" href="#about-me">
                            Check it out
                        </LinkButton>
                    </Stack>
                </TwoPanelBody>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/about.jpg"
                    alt="A wooden table in a coffee shop, with coffee and a notepad"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const AboutInterests: VFC = () => {
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

const AboutWhoAmI = () => {
    return (
        <TwoPanel id="about-me">
            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/ne-england.jpg"
                    alt="Sunset in a clear sky, on the north east coast (Redcar)"
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
                            From there, I moved to Birmingham, and started my software development career. I worked at a
                            local software development house as a full stack developer for around 2 years, working with
                            mapping libraries and design systems before moving into a fully front-end role at Curve.
                        </Text>
                    </TwoPanelBody>
                </Stack>
            </TwoPanelBlock>
        </TwoPanel>
    );
};

const AboutStuffUsed = () => {
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

const About: VFC = () => {
    return (
        <Layout>
            <Stack spacing={[16, null, 24]}>
                <SEO
                    title="About Me"
                    description="My history, background, interests and everything else you need to know."
                    canonical="/about"
                />
                <AboutIntro />
                <AboutWhoAmI />
                <AboutInterests />
                <AboutStuffUsed />
            </Stack>
        </Layout>
    );
};

export default About;
