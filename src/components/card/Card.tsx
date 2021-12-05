import { Box, BoxProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import React, { FC } from 'react';
import { useMergedStyles } from '../../hooks';

export const Card: FC<BoxProps> = ({ children, sx, ...rest }) => {
    const _sx = useMergedStyles(sx, {
        bg: (theme) => mode('gray.600', 'gray.400')(theme),
    });

    return (
        <Box p="8" rounded="xl" sx={_sx} {...rest}>
            {children}
        </Box>
    );
};
