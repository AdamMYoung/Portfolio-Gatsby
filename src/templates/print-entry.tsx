import React, { VFC } from 'react';
import { Button, chakra, Heading, Stack } from '@chakra-ui/react';

import { graphql } from 'gatsby';
import { Layout, STLFileRenderer } from '~views';
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
} from '~components/sections';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { LinkButton } from '~components/link-button';

type PrintEntryProps = {
    data: {
        contentful3DPrintModel: PrintEntry;
    };
};

const ChakraGatsbyImage = chakra(GatsbyImage);

const PrintEntryPage: VFC<PrintEntryProps> = ({ data }) => {
    const { name, description, printImages, stlFile } = data.contentful3DPrintModel;

    return (
        <Layout spacing="12">
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
                    <STLFileRenderer file={stlFile.localFile.publicURL} />
                </TwoPanelBlock>
            </TwoPanel>

            <Stack spacing="4">
                <ThreePanel>
                    {printImages.map((image) => (
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
