import {
    Box,
    BoxProps,
    Grid,
    GridProps,
    Stack,
    StackProps,
    Heading,
    HeadingProps,
    Text,
    TextProps,
    Flex,
    FlexProps,
    Button,
    ButtonProps,
} from '@chakra-ui/react';
import { m } from 'framer-motion';
import React, { ElementType } from 'react';

type InheritProps<T extends ElementType<any>> = React.ComponentPropsWithoutRef<T>;

export type MotionBoxProps = InheritProps<typeof MotionBox>;
export type MotionGridProps = InheritProps<typeof MotionGrid>;
export type MotionStackProps = InheritProps<typeof MotionStack>;
export type MotionFlexProps = InheritProps<typeof MotionFlex>;
export type MotionHeadingProps = InheritProps<typeof MotionHeading>;
export type MotionTextProps = InheritProps<typeof MotionText>;
export type MotionButtonProps = InheritProps<typeof MotionButton>;

export const MotionBox = m<BoxProps>(Box);
export const MotionGrid = m<GridProps>(Grid);
export const MotionStack = m<StackProps>(Stack);
export const MotionFlex = m<FlexProps>(Flex);
export const MotionHeading = m<HeadingProps>(Heading);
export const MotionText = m<TextProps>(Text);
export const MotionButton = m<ButtonProps>(Button);

type Speed = 'normal' | 'fast';

export const getContainerMotion = (speed: Speed = 'normal') => ({
    hidden: { opacity: 0 },
    show: {
        delay: 2,
        opacity: 1,
        transition: {
            delayChildren: speed === 'normal' ? 0.4 : 0.3,
            staggerChildren: speed === 'normal' ? 0.3 : 0.2,
        },
    },
});

export const getItemMotion = () => ({
    hidden: { opacity: 0 },
    show: { opacity: 1 },
});

export const useViewportTransition = (visibilityThreshold: number | 'some' = 'some') => {
    return {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: visibilityThreshold },
    };
};
