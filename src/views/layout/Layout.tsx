import { Box, Container, Stack } from '@chakra-ui/layout';
import React, { FC } from 'react';
import { SemanticProvider } from '../../providers';

import { Navigation } from './navigation';

export const Layout: FC = ({ children }) => {
    return (
        <SemanticProvider>
            <Container maxW="1600px" minH="100vh" py="12">
                <Navigation />

                <Container as="main" maxW="1290px" mt="16">
                    <Stack spacing="16">{children}</Stack>
                </Container>
            </Container>
        </SemanticProvider>
    );
};
