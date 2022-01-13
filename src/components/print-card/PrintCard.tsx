import { Heading, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react';
import GatsbyLink from 'gatsby-link';
import React, { VFC } from 'react';
import { CardListItem } from '~components/card-list';
import { STLFileRenderer } from '~views/stl-file-renderer';

type PrintCardProps = {
    title: string;
    description: string;
    to: string;
    modelUrl: string;
};

export const PrintCard: VFC<PrintCardProps> = ({ title, description, to, modelUrl }) => {
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
