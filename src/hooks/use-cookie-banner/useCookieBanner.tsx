import React from 'react';
import { Text, Button, HStack, ToastId, useToast, Box, chakra, Stack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { useLocation } from 'react-use';

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
    const location = useLocation();
    const toastId = useRef<ToastId>();

    const handleResponse = (accepted: boolean) => {
        setCookieAcceptance(accepted);
        toast.close(toastId.current);

        if (accepted) {
            initializeAndTrack(location);
        }
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
                        <Stack direction={['column', null, 'row']} spacing="4" alignItems={['end', null, 'initial']}>
                            <Text fontSize="sm">
                                This site uses cookies to track performance and to understand how the site is used. For
                                more information, see the{' '}
                                <Link textDecor="underline" to="/cookies">
                                    cookies page
                                </Link>
                                .
                            </Text>

                            <HStack spacing="2">
                                <Button
                                    size="sm"
                                    py={2}
                                    minW="24"
                                    variant="outline"
                                    onClick={() => handleResponse(false)}
                                >
                                    Decline
                                </Button>

                                <Button size="sm" py={2} minW="24" onClick={() => handleResponse(true)}>
                                    Accept
                                </Button>
                            </HStack>
                        </Stack>
                    </Box>
                ),
            });
        });
    }, [toast]);
};