import { Box, BoxProps, Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';

export const CardList: FC<GridProps> = ({ children, ...rest }) => {
    return (
        <Grid gap="6" gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']} {...rest}>
            {children}
        </Grid>
    );
};

export const CardListItem: FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box w="full" {...rest}>
            {children}
        </Box>
    );
};
