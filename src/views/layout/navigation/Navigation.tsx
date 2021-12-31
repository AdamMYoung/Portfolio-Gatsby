import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    DrawerProps,
    Grid,
    Menu,
    MenuList,
    Stack,
    useBreakpointValue,
    useColorMode,
    useDisclosure,
    MenuButton,
    Button,
    MenuItem,
    Portal,
} from '@chakra-ui/react';
import React, { VFC } from 'react';

import { Link, LinkButton, MenuIconButton, DarkModeToggle } from '~components';

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
                    <Menu matchWidth>
                        <MenuButton as={LinkButton} w="full" variant="link" textAlign="center" pt="2" pb="4">
                            My Stuff
                        </MenuButton>
                        <Portal>
                            <MenuList>
                                <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/projects">
                                    Projects
                                </MenuItem>
                                <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/prints">
                                    3D Models
                                </MenuItem>
                                <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/uses">
                                    Uses
                                </MenuItem>
                                <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/stats">
                                    Stats
                                </MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>

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
                as="nav"
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
                        <Stack visibility={['hidden', null, null, 'visible']} direction="row" spacing="12" mx="auto">
                            <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/blog">
                                Blog
                            </Link>
                            <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/q-and-a">
                                Q&A
                            </Link>

                            <Menu>
                                <MenuButton as={Link} variant="animate-ltr" fontWeight="semibold" fontSize="md">
                                    My Stuff
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/projects">
                                        Projects
                                    </MenuItem>
                                    <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/prints">
                                        3D Models
                                    </MenuItem>
                                    <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/uses">
                                        Uses
                                    </MenuItem>
                                    <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/stats">
                                        Stats
                                    </MenuItem>
                                </MenuList>
                            </Menu>
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
