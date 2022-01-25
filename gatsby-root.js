import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { BlogIndexProvider } from '~providers';

import { Layout } from '~views/layout';
import theme from './src/theme';

export const wrapRootElement = ({ element }) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_RECAPTCHA_KEY}>
            <LazyMotion features={domAnimation}>
                <ChakraProvider theme={theme}>
                    <BlogIndexProvider>
                        <Layout>{element}</Layout>
                    </BlogIndexProvider>
                </ChakraProvider>
            </LazyMotion>
        </GoogleReCaptchaProvider>
    );
};
