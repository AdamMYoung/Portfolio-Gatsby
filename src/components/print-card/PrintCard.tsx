import { chakra, Heading, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react';
import GatsbyLink from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { CardListItem } from '~components';
import { useIsMobile } from '~hooks';
import { STLFileRenderer } from '~views';

type PrintCardProps = {
    title: string;
    description: string;
    to: string;
    modelUrl: string;
};

const ChakraGatsbyImage = chakra(GatsbyImage);

export const PrintCard: VFC<PrintCardProps> = ({ title, description, to, modelUrl }) => {
    const isMobile = useIsMobile();

    return (
        <LinkBox _hover={{ '.blog-card-image': { borderColor: 'red' }, cursor: 'pointer' }}>
            <CardListItem as={Stack}>
                <STLFileRenderer file={modelUrl} />
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
