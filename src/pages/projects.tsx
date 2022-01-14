import { Box, Flex, Heading, Stack, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Card } from '~components/card';
import { Link } from '~components/link';
import { LinkButton } from '~components/link-button';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { useGithubStats } from '~hooks/static-queries';
import { SEO } from '~views/seo';

const ProjectsIntro: VFC = () => {
    return (
        <TwoPanel disableMotion>
            <TwoPanelBlock>
                <TwoPanelTitle as="h1">Current and past projects.</TwoPanelTitle>
                <TwoPanelSubtitle>Libraries, applications, and proof of concepts.</TwoPanelSubtitle>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/projects.jpg"
                    alt="A wireframe sketch of an application"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const ActiveProjects: VFC = () => {
    return (
        <Stack spacing="8">
            <Heading>Active Projects</Heading>
            <Card>
                <TwoPanel height={['auto', null, null, '20rem']}>
                    <TwoPanelBlock>
                        <TwoPanelHeading>
                            <TwoPanelTitle>eBay Heuristics</TwoPanelTitle>
                            <TwoPanelSubtitle>
                                Plots sales onto a world map using eBay and geocoding APIs.
                            </TwoPanelSubtitle>
                        </TwoPanelHeading>
                        <TwoPanelBody>
                            <LinkButton w="full" href="https://ebay-heuristics-v2.netlify.app/">
                                Open
                            </LinkButton>
                        </TwoPanelBody>
                    </TwoPanelBlock>

                    <StaticImage
                        style={{ borderRadius: '12px' }}
                        src="../images/ebay-heuristics.png"
                        alt="A map of london, a screenshot from eBay Heuristics"
                        width={900}
                    />
                </TwoPanel>
            </Card>
        </Stack>
    );
};

const ProjectsList: VFC = () => {
    const stats = useGithubStats();

    return (
        <Stack spacing="8">
            <Heading>GitHub Projects</Heading>
            <Box overflow="none" overflowX="auto">
                <Table colorScheme="white">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Languages</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {stats.repositories.map((repo) => (
                            <Tr key={repo.name}>
                                <Td>
                                    <Link href={`https://github.com/AdamMYoung/${repo.name}`}>{repo.name}</Link>
                                </Td>
                                <Td>{repo.description}</Td>
                                <Td>
                                    <Flex gap="2">
                                        {repo.languages.map((l) => (
                                            <Tag key={l}>{l}</Tag>
                                        ))}
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};

const Projects: VFC = () => {
    return (
        <Stack spacing={[16, null, 24]}>
            <SEO
                title="Projects"
                description="All websites, libraries and other bits of code I've developed."
                canonical="/projects/"
            />
            <ProjectsIntro />
            <ActiveProjects />
            <ProjectsList />
        </Stack>
    );
};

export default Projects;
