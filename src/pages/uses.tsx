import { Box, Heading, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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
                <TwoPanelTitle as="h1">My Uses.</TwoPanelTitle>
                <TwoPanelSubtitle>Equipment, software, hardware that I use for work and hobbies.</TwoPanelSubtitle>
            </TwoPanelBlock>

            <StaticImage
                style={{ borderRadius: '12px' }}
                placeholder="blurred"
                src="../images/edc.jpg"
                alt="Various everyday items, such as a watch, wallet and laptop"
            />
        </TwoPanel>
    );
};

const WorkList = () => {
    return (
        <Stack spacing="4">
            <Heading>Software Development</Heading>

            <Box overflow="none" overflowX="auto">
                <Table colorScheme="white">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Link</Th>
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
        </Stack>
    );
};

const PrintingList = () => {
    return (
        <Stack spacing="4">
            <Heading>3D Printing</Heading>
            <Box overflow="none" overflowX="auto">
                <Table colorScheme="white">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Link</Th>
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
        </Stack>
    );
};

const PhotographyList = () => {
    return (
        <Stack spacing="4">
            <Heading>Photography</Heading>
            <Box overflow="none" overflowX="auto">
                <Table colorScheme="white">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Link</Th>
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
        </Stack>
    );
};

const Uses: VFC = () => {
    return (
        <Layout>
            <SEO
                title="Uses"
                description="The bits and pieces I use daily, from software development to photography."
            />
            <HeroIntro />
            <WorkList />
            <PrintingList />
            <PhotographyList />
        </Layout>
    );
};

export default Uses;
