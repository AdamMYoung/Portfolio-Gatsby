import { Box, Heading, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import { TwoPanel, TwoPanelBlock, TwoPanelSubtitle, TwoPanelTitle, Link, TwoPanelImage } from '~components';
import { useUses } from '~hooks/static-queries';
import { Layout, SEO } from '~views';

const UsesIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelTitle as="h1">My Uses.</TwoPanelTitle>
                <TwoPanelSubtitle>Equipment, software, hardware that I use for work and hobbies.</TwoPanelSubtitle>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ width: '100%', borderRadius: '12px' }}
                    src="../images/edc.jpg"
                    alt="Various everyday items, such as a watch, wallet and laptop"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const Uses: VFC = () => {
    const categories = useUses();

    return (
        <Layout>
            <SEO
                title="Uses"
                description="The bits and pieces I use daily, from software development to photography."
            />
            <UsesIntro />

            {categories.map(({ name, uses }) => (
                <Stack spacing="4">
                    <Heading>{name}</Heading>
                    <Box overflow="none" overflowX="auto">
                        <Table colorScheme="white">
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Description</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {uses.map((use) => (
                                    <Tr key={use.name}>
                                        <Td>
                                            <Link href={use.link}>{use.name}</Link>
                                        </Td>
                                        <Td>{use.description.description}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </Stack>
            ))}
        </Layout>
    );
};

export default Uses;
