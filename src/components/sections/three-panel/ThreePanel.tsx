import { Image, ImageProps, Grid, GridProps, Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC, VFC } from 'react';

export const ThreePanel: FC<GridProps> = ({ children, ...rest }) => {
    return (
        <Grid gap="8" gridTemplateColumns={['1fr', null, '1fr 1fr', null, '1fr 1fr 1fr']} {...rest}>
            {children}
        </Grid>
    );
};

export const ThreePanelBlock: FC<GridProps> = ({ children, ...rest }) => {
    return (
        <Grid gap="8" gridTemplateColumns="1fr" mb="auto" {...rest}>
            {children}
        </Grid>
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

export const ThreePanelImage: VFC<ImageProps> = (props) => {
    return <Image rounded="xl" mx={[null, null, 'auto']} {...props} />;
};
