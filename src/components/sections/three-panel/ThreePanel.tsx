import { Box, BoxProps, Grid, GridProps, Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { getContainerMotion, getItemMotion, MotionGrid, MotionGridProps } from '~components/motion';

export const ThreePanel: FC<MotionGridProps> = ({ children, ...rest }) => {
    return (
        <MotionGrid
            variants={getContainerMotion()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            gap="8"
            gridTemplateColumns={['1fr', null, '1fr 1fr', null, '1fr 1fr 1fr']}
            {...rest}
        >
            {children}
        </MotionGrid>
    );
};

export const ThreePanelBlock: FC<MotionGridProps> = ({ children, ...rest }) => {
    return (
        <MotionGrid variants={getItemMotion()} gap="8" gridTemplateColumns="1fr" mb="auto" {...rest}>
            {children}
        </MotionGrid>
    );
};

export const ThreePanelTitle: FC<HeadingProps> = ({ children, ...rest }) => {
    return (
        <Heading as="h3" fontSize="3xl" {...rest}>
            {children}
        </Heading>
    );
};

export const ThreePanelSubtitle: FC<HeadingProps> = ({ children, ...rest }) => {
    return (
        <Heading as="p" fontSize="xl" variant="subtitle" {...rest}>
            {children}
        </Heading>
    );
};

export const ThreePanelImage: FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box rounded="xl" mx={[null, null, 'auto']} {...rest}>
            {children}
        </Box>
    );
};
