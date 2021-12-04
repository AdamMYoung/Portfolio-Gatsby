import { Divider, Grid, Stack } from '@chakra-ui/layout';
import {
    Box,
    Button,
    ButtonGroup,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    DrawerProps,
    useBreakpointValue,
    useColorMode,
    useDisclosure,
} from '@chakra-ui/react';
import React, { VFC } from 'react';

import { DarkModeToggle } from '../..';
import { Link, LinkButton, MenuIconButton } from '../../../components';
import { HamburgerIcon } from '@chakra-ui/icons';

const MobileNavDrawer: VFC<Omit<DrawerProps, 'children'>> = (props) => {
    return (
        <Drawer {...props}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody as={Stack} spacing="4" pt="14">
                    <LinkButton w="full" py="2" href="/" variant="link">
                        Home
                    </LinkButton>
                    <LinkButton w="full" py="2" href="/blog" variant="link">
                        Blog
                    </LinkButton>
                    <LinkButton w="full" py="2" href="/q-and-a" variant="link">
                        Q&A
                    </LinkButton>
                    <LinkButton w="full" py="2" href="/projects" variant="link">
                        Projects
                    </LinkButton>
                    <LinkButton w="full" py="2" href="/stats" variant="link">
                        Stats
                    </LinkButton>
                    <Divider />

                    <DarkModeToggle />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export const Navigation: VFC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();
    const isMobile = useBreakpointValue([true, null, null, false]);

    return (
        <>
            <Grid
                sx={{ bg: colorMode == 'dark' ? 'gray.800' : 'white' }}
                transitionProperty="background-color"
                transitionDuration="normal"
                zIndex="1"
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
                    {isMobile && (
                        <MenuIconButton onClick={onOpen} icon={<HamburgerIcon />} aria-label="Open navigation" />
                    )}
                    {!isMobile && <DarkModeToggle />}
                </Stack>
            </Grid>
            <MobileNavDrawer isOpen={isOpen} onClose={onClose} />
        </>
    );
};
