import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';
import { getItemMotion, MotionBox, MotionBoxProps } from '~components/motion';

import { useMergedStyles } from '~hooks';

export const Card: FC<MotionBoxProps> = ({ children, sx, ...rest }) => {
    const { colorMode } = useColorMode();

    const _sx = useMergedStyles(sx, {
        bg: colorMode === 'dark' ? 'gray.600' : 'gray.200',
    });

    return (
        <MotionBox
            p="8"
            variants={getItemMotion()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            rounded="xl"
            sx={_sx}
            {...rest}
        >
            {children}
        </MotionBox>
    );
};
