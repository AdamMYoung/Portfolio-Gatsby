import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { Location } from '@reach/router';

import { Layout } from './src/views';
import theme from './src/theme';

export const wrapRootElement = ({ element }) => {
    return (
        <Location>
            <LazyMotion features={domAnimation}>
                <ChakraProvider theme={theme}>
                    <Layout>{element}</Layout>
                </ChakraProvider>
            </LazyMotion>
        </Location>
    );
};
