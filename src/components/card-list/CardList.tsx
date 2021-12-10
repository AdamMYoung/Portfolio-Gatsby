import { Box, BoxProps, Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
    getContainerMotion,
    getItemMotion,
    MotionGrid,
    MotionGridProps,
    MotionBox,
    MotionBoxProps,
} from '~components/motion';

export const CardList: FC<MotionGridProps> = ({ children, ...rest }) => {
    return (
        <MotionGrid
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={getContainerMotion()}
            gap="6"
            gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']}
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
