import React, { FC } from 'react';
import {
    getContainerMotion,
    getItemMotion,
    MotionBox,
    MotionBoxProps,
    MotionGrid,
    MotionGridProps,
} from '~components/motion';

export const CardList: FC<MotionGridProps> = ({ children, ...rest }) => {
    return (
        <MotionGrid
            variants={getContainerMotion()}
            gap="6"
            gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
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
