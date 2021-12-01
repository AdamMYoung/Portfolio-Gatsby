import { Flex, Grid, Spacer, Stack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { DarkModeToggle } from '../..';

import { Link } from '../../../components';

export const Navigation = () => {
    return (
        <Grid gridTemplateColumns="1fr auto 1fr" gap="8" alignItems="center">
            <Box>
                <Link variant="animate-ltr" fontSize="2xl" fontWeight="bold" href="/">
                    Adam Young
                </Link>
            </Box>

            <Stack direction="row" spacing="12" mx="auto">
                <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/blog">
                    Blog
                </Link>
                <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/submit-a-question">
                    Submit a Question
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

            <Box ml="auto">
                <DarkModeToggle />
            </Box>
        </Grid>
    );
};
