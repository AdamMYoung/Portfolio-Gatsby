import { Box, BoxProps, Grid, GridProps } from '@chakra-ui/layout';
import React, { FC } from 'react';

export const CardList: FC<GridProps> = ({ children, ...rest }) => {
    return <Grid {...rest}>{children}</Grid>;
};

export const CardListItem: FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box rounded="lg" {...rest}>
            {children}
        </Box>
    );
};
