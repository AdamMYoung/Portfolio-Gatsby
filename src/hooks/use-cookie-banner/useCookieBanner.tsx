import React from 'react';
import { Text, Button, HStack, ToastId, useToast, Box, chakra } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { Link as GatsbyLink } from 'gatsby';
import { useIfClient } from '~hooks';

const Link = chakra(GatsbyLink);

const gaCookie = 'gatsby-gdpr-google-analytics';
const hotjarCookie = 'gatsby-gdpr-hotjar';

const createCookieEntry = (name: string, accepted: boolean) => {
    return `${name}=${accepted}; max-age=31536000;`;
};

const isCookieRequestSet = (): boolean => {
    return document.cookie.includes(gaCookie) && document.cookie.includes(hotjarCookie);
};

const setCookieAcceptance = (accepted: boolean) => {
    document.cookie = createCookieEntry(gaCookie, accepted);
    document.cookie = createCookieEntry(hotjarCookie, accepted);
};

export const useCookieBanner = () => {
    const toast = useToast();
    const toastId = useRef<ToastId>();

    const handleResponse = (accepted: boolean) => {
        setCookieAcceptance(accepted);
        toast.close(toastId.current);
    };

    useEffect(() => {
        useIfClient(() => {
            if (isCookieRequestSet() || !!toastId.current) {
                return;
            }

            toastId.current = toast({
                position: 'bottom',
                duration: null,
                render: () => (
                    <Box p="4" bg="blue.800" rounded="xl">
                        <HStack spacing="4">
                            <Text fontSize="sm">
                                This site uses cookies to track performance and to understand how the site is used. For
                                more information, see the{' '}
                                <Link textDecor="underline" to="/cookies">
                                    cookies page
                                </Link>
                                .
                            </Text>

                            <Button size="sm" py={2} minW="24" variant="outline" onClick={() => handleResponse(false)}>
                                Decline
                            </Button>

                            <Button size="sm" py={2} minW="24" onClick={() => handleResponse(true)}>
                                Accept
                            </Button>
                        </HStack>
                    </Box>
                ),
            });
        });
    }, [toast]);
};
