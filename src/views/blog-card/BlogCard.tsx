import { Box, chakra, Heading, Image, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react';
import GatsbyLink from 'gatsby-link';
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { CardListItem } from '../../components';

type BlogCardProps = {
    image: ImageDataLike;
    title: string;
    subtitle: string;
    to: string;
};

const ChakraGatsbyImage = chakra(GatsbyImage);

export const BlogCard: VFC<BlogCardProps> = ({ image, title, subtitle, to }) => {
    return (
        <LinkBox _hover={{ '.blog-card-image': { borderColor: 'red' }, cursor: 'pointer' }}>
            <Stack>
                <ChakraGatsbyImage
                    image={getImage(image)}
                    alt={title}
                    w="full"
                    h="40rem"
                    rounded="xl"
                    fit="cover"
                    transition="border 0.2s ease-in-out"
                    border="4px"
                    borderColor="transparent"
                    className="blog-card-image"
                />

                <Stack pt="4" pb="8">
                    <Heading variant="subtitle" as="p" fontSize="lg">
                        {subtitle}
                    </Heading>

                    <LinkOverlay to={to} as={GatsbyLink} fontSize="4xl">
                        {title}
                    </LinkOverlay>
                </Stack>
            </Stack>
        </LinkBox>
    );
};
