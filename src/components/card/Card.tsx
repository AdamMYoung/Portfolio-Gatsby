import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import React, { FC } from 'react';
import { useMergedStyles } from '../../hooks';

export const Card: FC<BoxProps> = ({ children, sx, ...rest }) => {
    const { colorMode } = useColorMode();

    const _sx = useMergedStyles(sx, {
        bg: colorMode === 'dark' ? 'gray.600' : 'gray.200',
    });

    return (
        <Box p="8" rounded="xl" sx={_sx} {...rest}>
            {children}
        </Box>
    );
};
