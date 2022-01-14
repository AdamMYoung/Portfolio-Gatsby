import { Stack, StackProps } from '@chakra-ui/react';
import { createContext } from '@chakra-ui/react-utils';
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
    useViewportTransition,
} from '~components/motion';
import { useMergedStyles } from '~hooks';

type TwoPanelContextProps = {
    disableMotion?: boolean;
};

type TwoPanelProps = TwoPanelContextProps & MotionGridProps;

const [TwoPanelProvider, useTwoPanelContext] = createContext<TwoPanelContextProps>();

export const TwoPanel: FC<TwoPanelProps> = ({ children, disableMotion, ...rest }) => {
    return (
        <MotionGrid as="section" gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1.2fr']} {...rest}>
            <TwoPanelProvider value={{ disableMotion }}>{children}</TwoPanelProvider>
        </MotionGrid>
    );
};

export const TwoPanelBlock: FC<MotionStackProps> = ({ children, sx, ...rest }) => {
    const { disableMotion } = useTwoPanelContext();

    const _sx = useMergedStyles(sx, {
        mr: [0, null, 16],
        '&:last-child': {
            ml: [0, null, 16],
            mr: 0,
        },
    });

    return (
        <MotionStack
            variants={!disableMotion && getContainerMotion()}
            {...useViewportTransition(true, 0.7)}
            sx={_sx}
            order={[1, null, 'initial']}
            my="8"
            spacing={[4, null, 8]}
            {...rest}
        >
            {children}
        </MotionStack>
    );
};

export const TwoPanelHeading: FC<StackProps> = ({ children, ...rest }) => {
    return <Stack {...rest}>{children}</Stack>;
};

export const TwoPanelTitle: FC<MotionHeadingProps> = ({ children, ...rest }) => {
    const { disableMotion } = useTwoPanelContext();

    return (
        <MotionHeading as="h2" variants={!disableMotion && getItemMotion()} fontSize={['3xl', null, '5xl']} {...rest}>
            {children}
        </MotionHeading>
    );
};

export const TwoPanelSubtitle: FC<MotionHeadingProps> = ({ children, ...rest }) => {
    const { disableMotion } = useTwoPanelContext();

    return (
        <MotionHeading
            as="p"
            variants={!disableMotion && getItemMotion()}
            fontSize={['xl', null, '3xl']}
            variant="subtitle"
            {...rest}
        >
            {children}
        </MotionHeading>
    );
};

export const TwoPanelBody: FC<MotionBoxProps> = ({ children, ...rest }) => {
    const { disableMotion } = useTwoPanelContext();

    return (
        <MotionBox variants={!disableMotion && getItemMotion()} w="full" {...rest}>
            {children}
        </MotionBox>
    );
};

export const TwoPanelImage: FC<MotionBoxProps> = ({ children, ...rest }) => {
    const { disableMotion } = useTwoPanelContext();

    return (
        <MotionBox
            variants={!disableMotion && getItemMotion()}
            {...useViewportTransition(true, 0.7)}
            order={[0, null, 'initial']}
            {...rest}
        >
            {children}
        </MotionBox>
    );
};
