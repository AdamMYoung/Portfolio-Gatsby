import { Box, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import {
    TwoPanel,
    TwoPanelImage,
    TwoPanelBlock,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '../components/sections/two-panel';
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
                width={1200}
            />
        </TwoPanel>
    );
};

const ProjectList = () => {
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
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
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
