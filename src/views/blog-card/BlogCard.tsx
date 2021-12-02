import { Box, chakra, Heading, Image, Stack } from '@chakra-ui/react';
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
        <CardListItem as={GatsbyLink} to={to} _hover={{ img: { borderColor: 'red' } }}>
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
                />
                <Stack pt="4" pb="8">
                    <Heading variant="subtitle" as="p" fontSize="lg">
                        {subtitle}
                    </Heading>
                    <Heading as="p">{title}</Heading>
                </Stack>
            </Stack>
        </CardListItem>
    );
};
