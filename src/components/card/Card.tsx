import { useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';
import { getItemMotion, MotionBox, MotionBoxProps, useViewportTransition } from '~components/motion';
import { useMergedStyles } from '~hooks';

export const Card: FC<MotionBoxProps> = ({ children, sx, ...rest }) => {
    const { colorMode } = useColorMode();

    const _sx = useMergedStyles(sx, {
        bg: colorMode === 'dark' ? '#232323' : 'gray.200',
    });

    return (
        <MotionBox
            p="8"
            variants={getItemMotion()}
            {...useViewportTransition(true, 0.7)}
            rounded="xl"
            sx={_sx}
            {...rest}
        >
            {children}
        </MotionBox>
    );
};
