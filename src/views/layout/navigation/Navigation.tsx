import { Grid, Stack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';

import { useIsMobile } from '../../../hooks';
import { DarkModeToggle } from '../..';
import { Link, MenuIconButton } from '../../../components';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navigation = () => {
    const isMobile = useIsMobile();

    return (
        <Grid gridTemplateColumns="1fr auto 1fr" gap="8" alignItems="center">
            <Box>
                <Link variant="animate-ltr" fontSize="2xl" fontWeight="bold" href="/">
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
                            Projects
                        </Link>
                        <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/stats">
                            Stats
                        </Link>
                        <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/about">
                            About
                        </Link>
                    </Stack>
                )}
            </Box>

            <Stack direction="row" ml="auto">
                {isMobile && <MenuIconButton icon={<HamburgerIcon />} aria-label="Open menu" />}
                <DarkModeToggle />
            </Stack>
        </Grid>
    );
};
