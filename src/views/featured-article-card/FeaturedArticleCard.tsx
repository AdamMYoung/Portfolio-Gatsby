import { chakra, Flex, LinkBox, LinkOverlay, Spacer, Stack, Tag, Text, useColorMode } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { Card } from '~components/card';
import { LinkButton } from '~components/link-button';
import { getContainerMotion } from '~components/motion';
import { useFeaturedArticle } from '~hooks/static-queries';
import { dateToLongDate } from '~utils/date';

const ChakraGatsbyImage = chakra(GatsbyImage);

export const FeaturedArticleCard: VFC = () => {
    const { colorMode } = useColorMode();
    const { title, slug, createdAt, heroImage, topics, copy } = useFeaturedArticle();

    return (
        <LinkBox
            as={Card}
            border="4px"
            borderColor="transparent"
            transition="border 0.2s ease-in-out"
            _hover={{ borderColor: 'red.400' }}
        >
            <TwoPanel gap={[0, null, 8]} gridTemplateColumns={['1fr', null, '1fr 1fr']}>
                <TwoPanelBlock mb="0" mr={[0, null, null, 16]} variants={getContainerMotion('faster')}>
                    <Flex gap="2" wrap="wrap">
                        <Tag>featured</Tag>
                        {topics.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </Flex>
                    <TwoPanelTitle>{title}</TwoPanelTitle>
                    <TwoPanelHeading>
                        <TwoPanelSubtitle fontSize={['lg', null, 'xl']}>{dateToLongDate(createdAt)}</TwoPanelSubtitle>
                        <TwoPanelSubtitle fontSize={['sm', null, 'md']}>{copy.readingTime}</TwoPanelSubtitle>
                    </TwoPanelHeading>

                    <TwoPanelBody>
                        <LinkOverlay
                            color={colorMode === 'dark' ? 'red.100' : 'red.500'}
                            as={LinkButton}
                            href={`/blog/${slug}`}
                            variant="outline"
                            w="full"
                        >
                            View Article
                        </LinkOverlay>
                    </TwoPanelBody>
                </TwoPanelBlock>
                <TwoPanelImage>
                    <ChakraGatsbyImage
                        h="full"
                        pointerEvents="none"
                        rounded="xl"
                        image={getImage(heroImage.localFile)}
                        alt={title}
                    />
                </TwoPanelImage>
            </TwoPanel>
        </LinkBox>
    );
};
