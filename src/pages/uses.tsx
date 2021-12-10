import { Box, Heading, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import { TwoPanel, TwoPanelBlock, TwoPanelSubtitle, TwoPanelTitle, Link, TwoPanelImage } from '~components';
import { useUses } from '~hooks/static-queries';
import { Layout, SEO } from '~views';

const HeroIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelTitle as="h1">My Uses.</TwoPanelTitle>
                <TwoPanelSubtitle>Equipment, software, hardware that I use for work and hobbies.</TwoPanelSubtitle>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ width: '100%', borderRadius: '12px' }}
                    placeholder="blurred"
                    src="../images/edc.jpg"
                    alt="Various everyday items, such as a watch, wallet and laptop"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const WorkList = () => {
    const { development } = useUses();

    return (
        <Stack spacing="4">
            <Heading>Software Development</Heading>

            <Box overflow="none" overflowX="auto">
                <Table colorScheme="white">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {development.map((d) => (
                            <Tr key={d.name}>
                                <Td>
                                    <Link href={d.url}>{d.name}</Link>
                                </Td>
                                <Td>{d.description}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};

const PrintingList = () => {
    const { printing } = useUses();

    return (
        <Stack spacing="4">
            <Heading>3D Printing</Heading>
            <Box overflow="none" overflowX="auto">
                <Table colorScheme="white">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {printing.map((p) => (
                            <Tr key={p.name}>
                                <Td>
                                    <Link href={p.url}>{p.name}</Link>
                                </Td>
                                <Td>{p.description}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};

const PhotographyList = () => {
    const { photography } = useUses();

    return (
        <Stack spacing="4">
            <Heading>Photography</Heading>
            <Box overflow="none" overflowX="auto">
                <Table colorScheme="white">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {photography.map((p) => (
                            <Tr key={p.name}>
                                <Td>
                                    <Link href={p.url}>{p.name}</Link>
                                </Td>
                                <Td>{p.description}</Td>
                            </Tr>
                        ))}
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
            <PhotographyList />
            <PrintingList />
        </Layout>
    );
};

export default Uses;
