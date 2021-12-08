import { chakra, LinkBox, LinkOverlay, Spacer, Text, useColorMode } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import { Card, LinkButton, TwoPanel, TwoPanelBlock, TwoPanelHeading, TwoPanelTitle } from '~components';
import { useFeaturedArticle } from '~hooks/static-queries';
import { stringToLongDate } from '~utils/date';

const ChakraGatsbyImage = chakra(GatsbyImage);

export const FeaturedArticleCard: VFC = () => {
    const { colorMode } = useColorMode();
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
                    <Text fontWeight="semibold" fontSize="sm">
                        Featured Article
                    </Text>
                    <TwoPanelTitle>{title}</TwoPanelTitle>
                    <TwoPanelHeading>
                        <Text fontSize={["lg", null, "xl"]}>{stringToLongDate(createdAt)}</Text>
                        <Text fontSize={["sm", null, "md"]}>{copy.readingTime}</Text>
                    </TwoPanelHeading>

                    <Spacer />
                    <LinkOverlay
                        color={colorMode === 'dark' ? 'red.100' : 'red.500'}
                        as={LinkButton}
                        href={`/blog/${slug}`}
                        variant="outline"
                    >
                        View Article
                    </LinkOverlay>
                </TwoPanelBlock>
                <ChakraGatsbyImage pointerEvents="none" rounded="xl" image={getImage(heroImage)} alt={title} />
            </TwoPanel>
        </LinkBox>
    );
};
