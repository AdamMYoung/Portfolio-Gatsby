import { Box, Heading, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Link } from '~components/link';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { useUses } from '~hooks/static-queries';
import { Layout } from '~views/layout';
import { SEO } from '~views/seo';

const UsesIntro = () => {
    return (
        <TwoPanel disableMotion>
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
            <Stack spacing={[16, null, 24]}>
                <SEO
                    title="Uses"
                    description="The bits and pieces I use daily, from software development to photography."
                    canonical="/uses/"
                />
                <UsesIntro />

                {categories.map(({ name, uses }) => (
                    <Stack key={name} spacing="4">
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
            </Stack>
        </Layout>
    );
};

export default Uses;
