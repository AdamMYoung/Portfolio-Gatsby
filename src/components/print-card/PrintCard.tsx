import { chakra, Heading, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import GatsbyLink from 'gatsby-link';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { CardListItem } from '~components/card-list';
import { useIsMobile } from '~hooks';
import { STLFileRenderer } from '~views/stl-file-renderer';

type PrintCardProps = {
    image: ImageDataLike;
    title: string;
    description: string;
    to: string;
    modelUrl: string;
};

const ChakraGatsbyImage = chakra(GatsbyImage);

export const PrintCard: VFC<PrintCardProps> = ({ image, title, description, to, modelUrl }) => {
    const isMobile = useIsMobile();

    return (
        <LinkBox _hover={{ '.blog-card-image': { borderColor: 'red' }, cursor: 'pointer' }}>
            <CardListItem as={Stack}>
                {isMobile ? (
                    <ChakraGatsbyImage
                        image={getImage(image)}
                        alt={title}
                        w="full"
                        h={['25rem', null, '30rem']}
                        rounded="xl"
                        fit="cover"
                        pointerEvents="none"
                        transition="border 0.2s ease-in-out"
                        border="4px"
                        borderColor="transparent"
                        className="blog-card-image"
                    />
                ) : (
                    <STLFileRenderer file={modelUrl} />
                )}

                <Stack pt="4" pb="8">
                    <LinkOverlay to={to} as={GatsbyLink} fontSize={['3xl', null, '4xl']}>
                        {title}
                    </LinkOverlay>
                    <Heading noOfLines={2} variant="subtitle" as="p" fontSize="lg">
                        {description}
                    </Heading>
                </Stack>
            </CardListItem>
        </LinkBox>
    );
};
