import { Container, Stack, StackProps } from '@chakra-ui/react';
import { LazyMotion, domAnimation } from 'framer-motion';
import React, { FC } from 'react';

import { useCookieBanner } from '~hooks';

import { Footer } from './footer';
import { Navigation } from './navigation';

export const Layout: FC<StackProps> = ({ children, ...rest }) => {
    useCookieBanner();

    return (
        <LazyMotion features={domAnimation}>
            <Container maxW="1600px" minH="100vh" pb="12">
                <Navigation />
                <Container as="main" maxW="1280px" mt={[8, null, 16]}>
                    <Stack spacing={[16, null, 24]} {...rest}>
                        {children}
                    </Stack>

                    <Footer />
                </Container>
            </Container>
        </LazyMotion>
    );
};
