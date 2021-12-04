import { Grid, Stack } from '@chakra-ui/layout';
import { Box, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { mode } from '@chakra-ui/theme-tools';

import { DarkModeToggle } from '../..';
import { Card, Link, MenuIconButton } from '../../../components';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navigation = () => {
    const { colorMode } = useColorMode();
    const isMobile = useBreakpointValue([true, null, null, false]);

    return (
        <Grid
            sx={{ bg: colorMode == 'dark' ? 'gray.800' : 'white' }}
            transitionProperty="background-color"
            transitionDuration="normal"
            zIndex="10000"
            p="4"
            pos="sticky"
            top="0"
            gridTemplateColumns="1fr auto 1fr"
            gap="8"
            alignItems="center"
        >
            <Box>
                <Link whiteSpace="nowrap" variant="animate-ltr" fontSize="2xl" fontWeight="bold" href="/">
                    Adam Young
                </Link>
            </Box>

            <Box>
                {!isMobile && (
                    <Stack direction="row" spacing="12" mx="auto">
                        <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/blog">
                            Blog
                        </Link>
                        <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/q-and-a">
                            Q&A
                        </Link>
                        <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/projects">
                            Current Projects
                        </Link>
                        <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/stats">
                            My Stats
                        </Link>
                    </Stack>
                )}
            </Box>

            <Stack direction="row" ml="auto">
                {isMobile && <MenuIconButton icon={<HamburgerIcon />} aria-label="Open menu" />}
                {!isMobile && <DarkModeToggle />}
            </Stack>
        </Grid>
    );
};
