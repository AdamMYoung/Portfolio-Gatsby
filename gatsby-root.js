import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { BlogIndexProvider } from '~providers';

import theme from './src/theme';

export const wrapRootElement = ({ element }) => {
    return (
        <LazyMotion features={domAnimation}>
            <ChakraProvider theme={theme}>
                <BlogIndexProvider>{element}</BlogIndexProvider>
            </ChakraProvider>
        </LazyMotion>
    );
};
