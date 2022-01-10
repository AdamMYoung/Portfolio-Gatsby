import React, { FC } from 'react';
import {
    useViewportTransition,
    getItemMotion,
    getContainerMotion,
    MotionButton,
    MotionButtonProps,
    MotionFlex,
    MotionFlexProps,
} from '~components/motion';

import { useMergedStyles } from '~hooks';

export const CategoryList: FC<MotionFlexProps> = ({ children, sx, ...rest }) => {
    const _sx = useMergedStyles(sx, { '*': { m: 1 } });

    return (
        <MotionFlex
            variants={getContainerMotion('fastest')}
            {...useViewportTransition()}
            flexWrap="wrap"
            sx={_sx}
            {...rest}
        >
            {children}
        </MotionFlex>
    );
};

export const CategoryListItem: FC<MotionButtonProps> = ({ children, ...rest }) => {
    return (
        <MotionButton
            variants={getItemMotion()}
            variant="outline"
            _disabled={{ color: 'gray.400', cursor: 'not-allowed' }}
            p={['1', null, '6']}
            {...rest}
        >
            {children}
        </MotionButton>
    );
};
