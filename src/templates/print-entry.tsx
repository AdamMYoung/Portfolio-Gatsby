import React, { VFC } from 'react';
import { Box, chakra, Heading, Stack } from '@chakra-ui/react';

import { graphql } from 'gatsby';
import { Layout, SEO, STLFileRenderer } from '~views';
import { PrintEntry } from '~types';
import {
    ThreePanel,
    ThreePanelBlock,
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelSubtitle,
    TwoPanelTitle,
    Link,
    LinkButton,
} from '~components';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type PrintEntryProps = {
    data: {
        contentful3DPrintModel: PrintEntry;
    };
};

const ChakraGatsbyImage = chakra(GatsbyImage);

const PrintsNavigation: VFC = () => {
    return (
        <Stack spacing="6">
            <Box>
                <Link href="/prints" fontSize={['md', null, 'lg']} pl="0">
                    <ArrowBackIcon mb="1" />
                    {` Back to Prints`}
                </Link>
            </Box>
        </Stack>
    );
};

const PrintEntryPage: VFC<PrintEntryProps> = ({ data }) => {
    const { name, description, printImages, slug, stlFile } = data.contentful3DPrintModel;

    return (
        <Layout spacing="12">
            <SEO title={name} description={description.description} canonical={`/prints/${slug}`} />
            <Stack spacing="4">
                <PrintsNavigation />
                <TwoPanel>
                    <TwoPanelBlock>
                        <TwoPanelHeading>
                            <TwoPanelTitle>{name}</TwoPanelTitle>
                            <TwoPanelSubtitle fontSize="md">{description.description}</TwoPanelSubtitle>
                        </TwoPanelHeading>
                        <TwoPanelBody>
                            <LinkButton href={stlFile.localFile.publicURL} download w="full" variant="outline">
                                Download STL
                            </LinkButton>
                        </TwoPanelBody>
                    </TwoPanelBlock>
                    <TwoPanelBlock>
                        <STLFileRenderer file={stlFile.localFile.publicURL} minH={[250, null, 400]} />
                    </TwoPanelBlock>
                </TwoPanel>
            </Stack>

            <Stack spacing="4">
                <Heading>Images</Heading>
                <ThreePanel>
                    {printImages?.map((image) => (
                        <ThreePanelBlock>
                            <ChakraGatsbyImage
                                h="full"
                                pointerEvents="none"
                                rounded="xl"
                                image={getImage(image.localFile)}
                                alt={name}
                            />
                        </ThreePanelBlock>
                    ))}
                </ThreePanel>
            </Stack>
        </Layout>
    );
};

export default PrintEntryPage;

export const query = graphql`
    query ($slug: String!) {
        contentful3DPrintModel(slug: { eq: $slug }) {
            name
            slug
            description {
                description
            }
            stlFile {
                localFile {
                    publicURL
                }
            }
            printImages {
                localFile {
                    childImageSharp {
                        gatsbyImageData(width: 600)
                    }
                }
            }
        }
    }
`;
