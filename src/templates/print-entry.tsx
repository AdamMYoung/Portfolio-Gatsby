import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, chakra, Heading, Stack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Link } from '~components/link';
import { LinkButton } from '~components/link-button';
import { ThreePanel, ThreePanelBlock } from '~components/sections/three-panel';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { PrintEntry } from '~types';
import { SEO } from '~views/seo';
import { STLFileRenderer } from '~views/stl-file-renderer';

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
        <Stack spacing="12">
            <SEO title={name} description={description.description} canonical={`/prints/${slug}/`} />
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

            {printImages && printImages.length > 0 && (
                <Stack spacing="4">
                    <Heading>Images</Heading>
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
            )}
        </Stack>
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
