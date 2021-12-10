import { Box, BoxProps, Grid, GridProps, Heading, HeadingProps, Stack, StackProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import {
    getContainerMotion,
    getItemMotion,
    MotionBox,
    MotionBoxProps,
    MotionGrid,
    MotionGridProps,
    MotionStack,
    MotionStackProps,
    MotionHeading,
    MotionHeadingProps,
} from '~components/motion';
import { useMergedStyles } from '~hooks';

export const TwoPanel: FC<MotionGridProps> = ({ children, ...rest }) => {
    return (
        <MotionGrid
            as="section"
            variants={getContainerMotion()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1.2fr']}
            {...rest}
        >
            {children}
        </MotionGrid>
    );
};

export const TwoPanelBlock: FC<MotionStackProps> = ({ children, sx, ...rest }) => {
    const _sx = useMergedStyles(sx, {
        mr: [0, null, 16],
        '&:last-child': {
            ml: [0, null, 16],
            mr: 0,
        },
    });

    return (
        <MotionStack sx={_sx} order={[1, null, 'initial']} my="8" spacing="8" {...rest}>
            {children}
        </MotionStack>
    );
};

export const TwoPanelHeading: FC<StackProps> = ({ children, ...rest }) => {
    return <Stack {...rest}>{children}</Stack>;
};

export const TwoPanelTitle: FC<MotionHeadingProps> = ({ children, ...rest }) => {
    return (
        <MotionHeading as="h2" variants={getItemMotion()} fontSize={['4xl', null, '5xl']} {...rest}>
            {children}
        </MotionHeading>
    );
};

export const TwoPanelSubtitle: FC<MotionHeadingProps> = ({ children, ...rest }) => {
    return (
        <MotionHeading as="p" variants={getItemMotion()} fontSize={['xl', null, '3xl']} variant="subtitle" {...rest}>
            {children}
        </MotionHeading>
    );
};

export const TwoPanelBody: FC<MotionBoxProps> = ({ children, ...rest }) => {
    return (
        <MotionBox variants={getItemMotion()} w="full" {...rest}>
            {children}
        </MotionBox>
    );
};

export const TwoPanelImage: FC<MotionBoxProps> = ({ children, ...rest }) => {
    return (
        <MotionBox variants={getItemMotion()} order={[0, null, 'initial']} h="full" objectFit="fill" {...rest}>
            {children}
        </MotionBox>
    );
};
