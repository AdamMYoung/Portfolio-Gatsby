import { chakra, LinkBox, LinkOverlay, Spacer, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { Card, LinkButton, TwoPanel, TwoPanelBlock, TwoPanelHeading, TwoPanelTitle } from '../../components';
import { useFeaturedArticle } from '../../hooks/static-queries/use-featured-article';
import { stringToLongDate } from '../../utils/date';

const ChakraGatsbyImage = chakra(GatsbyImage);

export const FeaturedArticleCard: VFC = () => {
    const { title, slug, createdAt, heroImage, copy } = useFeaturedArticle();

    return (
        <LinkBox
            as={Card}
            border="4px"
            borderColor="transparent"
            transition="border 0.2s ease-in-out"
            _hover={{ borderColor: 'red.400' }}
        >
            <TwoPanel gap="8" gridTemplateColumns={['1fr', null, '1fr 1fr']}>
                <TwoPanelBlock mb="0" mr={[0, null, null, 16]}>
                    <Text fontWeight="semibold" fontSize="md">
                        Featured Article
                    </Text>
                    <TwoPanelHeading>
                        <TwoPanelTitle>{title}</TwoPanelTitle>
                        <Text variant="subtitle" fontSize="xl">
                            {stringToLongDate(createdAt)}
                        </Text>
                        <Text variant="subtitle" fontSize="md">
                            {copy.readingTime}
                        </Text>
                    </TwoPanelHeading>

                    <Spacer />
                    <LinkOverlay as={LinkButton} href={`/blog/${slug}`} variant="outline">
                        View Article
                    </LinkOverlay>
                </TwoPanelBlock>
                <ChakraGatsbyImage pointerEvents="none" rounded="xl" image={getImage(heroImage)} alt={title} />
            </TwoPanel>
        </LinkBox>
    );
};
