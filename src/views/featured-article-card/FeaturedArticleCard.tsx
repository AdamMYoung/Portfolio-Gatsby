import { chakra, LinkBox, LinkOverlay, Spacer, Stack, Tag, Text, useColorMode } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import {
    Card,
    LinkButton,
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components';
import { getContainerMotion } from '~components/motion';
import { useFeaturedArticle } from '~hooks/static-queries';
import { stringToLongDate } from '~utils/date';

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
                    <Stack direction="row">
                        <Tag>featured</Tag>
                        {topics.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </Stack>
                    <TwoPanelTitle>{title}</TwoPanelTitle>
                    <TwoPanelHeading>
                        <TwoPanelSubtitle fontSize={['lg', null, 'xl']}>{stringToLongDate(createdAt)}</TwoPanelSubtitle>
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
