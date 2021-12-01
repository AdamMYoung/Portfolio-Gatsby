import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import GatsbyLink from 'gatsby-link';
import React, { VFC } from 'react';
import { CardListItem } from '../../components';

type BlogCardProps = {
    src: string;
    title: string;
    subtitle: string;
    to: string;
};

export const BlogCard: VFC<BlogCardProps> = ({ src, title, subtitle, to }) => {
    return (
        <CardListItem as={GatsbyLink} to={to} _hover={{ img: { borderColor: 'red' } }}>
            <Stack>
                <Image
                    src={src}
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
