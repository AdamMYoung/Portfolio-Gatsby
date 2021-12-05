import { Box, Flex, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Link } from '../components';
import { TwoPanel, TwoPanelBlock, TwoPanelSubtitle, TwoPanelTitle } from '../components/sections/two-panel';
import { useGithubStats } from '../hooks/static-queries/use-github-stats';
import { Layout } from '../views';
import { SEO } from '../views/seo/SEO';

const HeroIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelTitle as="h1">Current and past projects.</TwoPanelTitle>
                <TwoPanelSubtitle>Libraries, applications, and proof of concepts.</TwoPanelSubtitle>
            </TwoPanelBlock>

            <StaticImage
                style={{ borderRadius: '12px' }}
                placeholder="blurred"
                src="../images/projects.jpg"
                alt="A wireframe sketch of an application"
                width={600}
            />
        </TwoPanel>
    );
};

const ProjectList = () => {
    const stats = useGithubStats();

    return (
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
                                <Flex sx={{ '* + *': { ml: 1 } }}>
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
    );
};

const Projects: VFC = () => {
    return (
        <Layout>
            <SEO title="Projects" description="All websites, libraries and other bits of code I've developed." />
            <HeroIntro />
            <ProjectList />
        </Layout>
    );
};

export default Projects;
