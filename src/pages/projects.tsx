import { Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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

const HeroIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelTitle>Current and past projects.</TwoPanelTitle>
                <TwoPanelSubtitle>Libraries, applications, and proof of concepts.</TwoPanelSubtitle>
            </TwoPanelBlock>

            <StaticImage style={{ borderRadius: '12px' }} placeholder="blurred" src="../images/projects.jpg" alt="" />
        </TwoPanel>
    );
};

const ProjectList = () => {
    return (
        <Table colorScheme="white">
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Languages</Th>
                    <Th>Last Updated</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

const Projects: VFC = () => {
    return (
        <Layout>
            <HeroIntro />
            <ProjectList />
        </Layout>
    );
};

export default Projects;
