import { Box, BoxProps, Grid, GridProps, Heading, HeadingProps, Stack, StackProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useMergedStyles } from '~hooks';

export const TwoPanel: FC<GridProps> = ({ children, ...rest }) => {
    return (
        <Grid as="section" gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1.2fr']} {...rest}>
            {children}
        </Grid>
    );
};

export const TwoPanelBlock: FC<StackProps> = ({ children, sx, ...rest }) => {
    const _sx = useMergedStyles(sx, {
        mr: [0, null, 16],
        '&:last-child': {
            ml: [0, null, 16],
            mr: 0,
        },
    });

    return (
        <Stack sx={_sx} order={[1, null, 'initial']} my="8" spacing="8" {...rest}>
            {children}
        </Stack>
    );
};

export const TwoPanelHeading: FC<StackProps> = ({ children, ...rest }) => {
    return <Stack {...rest}>{children}</Stack>;
};

export const TwoPanelTitle: FC<HeadingProps> = ({ children, ...rest }) => {
    return (
        <Heading as="h2" fontSize={['3xl', null, '5xl']} {...rest}>
            {children}
        </Heading>
    );
};

export const TwoPanelSubtitle: FC<HeadingProps> = ({ children, ...rest }) => {
    return (
        <Heading as="p" fontSize={['xl', null, '3xl']} variant="subtitle" {...rest}>
            {children}
        </Heading>
    );
};

export const TwoPanelImage: FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box order={[0, null, 'initial']} rounded="xl" maxH={[null, null, '70vh']} mx={[null, null, 'auto']} {...rest}>
            {children}
        </Box>
    );
};
