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
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useBreakpointValue,
    useColorMode,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, VFC } from 'react';
import { useLocation } from 'react-use';
import { DarkModeToggle } from '~components/dark-mode-toggle';
import { Link } from '~components/link';
import { LinkButton } from '~components/link-button';
import { MenuIconButton } from '~components/menu-icon-button';

const MobileNavDrawer: VFC<Omit<DrawerProps, 'children'>> = (props) => {
    const { colorMode } = useColorMode();

    return (
        <Drawer {...props}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bg={colorMode === 'dark' ? '#121212' : 'white'} as={Stack} spacing="4" pt="14">
                    <LinkButton w="full" py="2" href="/" variant="link">
                        Home
                    </LinkButton>
                    <LinkButton w="full" py="2" href="/blog" variant="link">
                        Blog
                    </LinkButton>
                    <LinkButton w="full" py="2" href="/about" variant="link">
                        About
                    </LinkButton>

                    <LinkButton w="full" py="2" href="/q-and-a" variant="link">
                        Q&A
                    </LinkButton>
                    <Menu matchWidth>
                        <MenuButton as={LinkButton} w="full" variant="link" textAlign="center" pt="2" pb="4">
                            My Stuff
                        </MenuButton>

                        <MenuList bg={colorMode === 'dark' ? '#232323' : 'white'}>
                            <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/cv">
                                Resumé
                            </MenuItem>
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

                    <Divider />

                    <DarkModeToggle />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export const Navigation: VFC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const isMobile = useBreakpointValue([true, null, null, false]);

    // Close the nav drawer whenever the location changes.
    useEffect(() => onClose(), [onClose, location]);

    return (
        <>
            <Grid
                as="nav"
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
                            <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/about">
                                About
                            </Link>
                            <Link variant="animate-ltr" fontWeight="semibold" fontSize="md" href="/q-and-a">
                                Q&A
                            </Link>
                            <Menu>
                                <MenuButton as={Link} variant="animate-ltr" fontWeight="semibold" fontSize="md">
                                    My Stuff
                                </MenuButton>
                                <MenuList bg={colorMode === 'dark' ? '#232323' : 'white'}>
                                    <MenuItem as={Link} fontWeight="semibold" fontSize="md" href="/cv">
                                        Resumé
                                    </MenuItem>
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
