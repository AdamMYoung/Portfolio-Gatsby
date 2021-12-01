import { Image, ImageProps } from '@chakra-ui/image';
import {
    Box,
    BoxProps,
    Grid,
    GridProps,
    Heading,
    HeadingProps,
    Stack,
    StackProps,
    Text,
    TextProps,
} from '@chakra-ui/layout';
import React, { FC, VFC } from 'react';
import { useSemanticElement } from '../../../providers';

export const Hero: FC<GridProps> = ({ children, ...rest }) => {
    return (
        <Grid as="section" gridTemplateColumns={['1fr', null, '1fr 1.2fr']} {...rest}>
            {children}
        </Grid>
    );
};

export const HeroPanel: FC<StackProps> = ({ children, ...rest }) => {
    return (
        <Stack order={[1, null, 'initial']} my="16" mr={[0, null, 16]} spacing="4" {...rest}>
            {children}
        </Stack>
    );
};

export const HeroTitle: FC<HeadingProps> = ({ children, ...rest }) => {
    const semanticElement = useSemanticElement();

    return (
        <Heading as={semanticElement} fontSize="5xl" {...rest}>
            {children}
        </Heading>
    );
};

export const HeroSubtitle: FC<TextProps> = ({ children, ...rest }) => {
    return (
        <Heading as="p" fontSize="4xl" variant="subtitle" {...rest}>
            {children}
        </Heading>
    );
};

export const HeroImage: VFC<ImageProps> = (props) => {
    return <Image order={[0, null, 'initial']} rounded="xl" {...props} />;
};
