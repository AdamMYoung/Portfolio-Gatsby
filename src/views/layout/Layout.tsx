import { Box, Container, Stack } from '@chakra-ui/layout';
import { StackProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Footer } from './footer';

import { Navigation } from './navigation';

export const Layout: FC<StackProps> = ({ children, ...rest }) => {
    return (
        <Container maxW="1600px" minH="100vh" py="12">
            <Navigation />

            <Container as="main" maxW="1290px" mt="16">
                <Stack spacing="24" {...rest}>
                    {children}
                </Stack>

                <Footer />
            </Container>
        </Container>
    );
};
