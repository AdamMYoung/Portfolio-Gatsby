import { Box, BoxProps, Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
    getContainerMotion,
    getItemMotion,
    MotionGrid,
    MotionGridProps,
    MotionBox,
    MotionBoxProps,
    useViewportTransition,
} from '~components/motion';

export const CardList: FC<MotionGridProps> = ({ children, ...rest }) => {
    return (
        <MotionGrid
            variants={getContainerMotion()}
            gap="6"
            gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']}
            initial="hidden"
            animate="show"
            layout
            {...rest}
        >
            {children}
        </MotionGrid>
    );
};

export const CardListItem: FC<MotionBoxProps> = ({ children, ...rest }) => {
    return (
        <MotionBox variants={getItemMotion()} w="full" {...rest}>
            {children}
        </MotionBox>
    );
};
