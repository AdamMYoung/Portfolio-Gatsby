import { chakra, Text, Spacer, Button, Box, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { Hero, HeroBlock, HeroImage, HeroSubtitle, HeroTitle, Link } from '../../components';
import { Card } from '../../components/card';
import { useFeaturedArticle } from '../../hooks/static-queries/use-featured-article';
import { stringToLongDate } from '../../utils/date';

const ChakraGatsbyImage = chakra(GatsbyImage);

export const FeaturedArticleCard: VFC = () => {
    const { title, slug, createdAt, heroImage } = useFeaturedArticle();

    return (
        <LinkBox
            as={Card}
            border="4px"
            borderColor="transparent"
            transition="border 0.2s ease-in-out"
            _hover={{ borderColor: 'red.400' }}
        >
            <Hero gap="8" gridTemplateColumns={['1fr', null, null, '1fr 1fr']}>
                <HeroBlock mb="0" mr={[0, null, null, 16]}>
                    <Text fontWeight="semibold" fontSize="md">
                        Featured Article
                    </Text>
                    <LinkOverlay
                        as={GatsbyLink}
                        fontWeight="semibold"
                        color="white"
                        fontSize="5xl"
                        to={`/blog/${slug}`}
                    >
                        {title}
                    </LinkOverlay>

                    <Text color="gray.300" fontSize="xl">
                        {stringToLongDate(createdAt)}
                    </Text>
                    <Spacer />
                </HeroBlock>
                <ChakraGatsbyImage rounded="xl" image={getImage(heroImage)} alt={title} />
            </Hero>
        </LinkBox>
    );
};
