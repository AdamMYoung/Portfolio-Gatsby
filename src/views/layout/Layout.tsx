import { Box, Container, Flex, Stack, StackProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { useCookieBanner } from '~hooks';

import { Footer } from './footer';
import { Navigation } from './navigation';

export const Layout: FC<StackProps> = ({ children, ...rest }) => {
    useCookieBanner();

    return (
        <>
            <Container maxW="1600px">
                <Navigation />
            </Container>

            <Container as="main" maxW="1280px" mt={[8, null, 16]}>
                {children}
                <Footer />
            </Container>
        </>
    );
};
