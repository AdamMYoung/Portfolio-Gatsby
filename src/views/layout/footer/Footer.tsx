import { Divider, Flex, Grid, Heading, Icon, IconButton, Stack } from '@chakra-ui/react';
import React, { VFC } from 'react';
import { FaDev, FaGithub, FaTwitter, FaUnsplash } from 'react-icons/fa';
import { Link } from '~components/link';

export const Footer: VFC = () => {
    return (
        <Stack as="footer" spacing="12" mt="12" py="12">
            <Divider />

            <Grid
                gap={['12', null, '8']}
                textAlign={['center', null, 'left']}
                gridTemplateColumns={['1fr', null, '2fr 1fr 1fr']}
            >
                <Stack spacing="4">
                    <Heading fontSize="xl">Socials</Heading>
                    <Flex flexWrap="wrap" justifyContent={['center', null, 'flex-start']} gap="2">
                        <IconButton
                            as={Link}
                            variant="outline"
                            href="https://github.com/AdamMYoung"
                            icon={<Icon as={FaGithub} />}
                            aria-label="Github"
                        />
                        <IconButton
                            as={Link}
                            variant="outline"
                            href="https://twitter.com/AdamMYoung_"
                            icon={<Icon as={FaTwitter} />}
                            aria-label="Twitter"
                        />
                        <IconButton
                            as={Link}
                            variant="outline"
                            href="https://dev.to/adammyoung"
                            icon={<Icon as={FaDev} />}
                            aria-label="Dev.to"
                        />
                        <IconButton
                            as={Link}
                            variant="outline"
                            href="https://unsplash.com/@adammyoung"
                            icon={<Icon as={FaUnsplash} />}
                            aria-label="Unsplash"
                        />
                    </Flex>
                </Stack>

                <Stack spacing="6">
                    <Stack>
                        <Heading fontSize="xl">Contact</Heading>
                        <Grid gap="1" gridTemplateColumns={['repeat(2, 1fr)', null, '1fr']}>
                            <Link fontSize="sm" color="primary" href="/q-and-a">
                                Q&A
                            </Link>
                            <Link fontSize="sm" color="primary" href="/blog">
                                Email
                            </Link>
                        </Grid>
                    </Stack>
                    <Stack>
                        <Heading fontSize="xl">Quick Links</Heading>
                        <Grid gap="1" gridTemplateColumns={['repeat(2, 1fr)', null, '1fr']}>
                            <Link fontSize="sm" color="primary" href="/blog">
                                Blog
                            </Link>
                            <Link fontSize="sm" color="primary" href="/about">
                                About
                            </Link>
                            <Link fontSize="sm" color="primary" href="/cv">
                                Resumé
                            </Link>
                            <Link fontSize="sm" color="primary" href="/cookies">
                                Cookies
                            </Link>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack>
                    <Heading fontSize="xl">My Stuff</Heading>
                    <Grid gap="1" gridTemplateColumns={['repeat(2, 1fr)', null, '1fr']}>
                        <Link fontSize="sm" color="primary" href="/projects">
                            Projects
                        </Link>
                        <Link fontSize="sm" color="primary" href="/prints">
                            3D Models
                        </Link>
                        <Link fontSize="sm" color="primary" href="/uses">
                            Uses
                        </Link>
                        <Link fontSize="sm" color="primary" href="/stats">
                            Stats
                        </Link>
                    </Grid>
                </Stack>
                <Stack spacing="2">
                    <Heading fontSize="medium">All rights reserved © Adam Young {new Date().getFullYear()}</Heading>
                    <Link href="https://github.com/AdamMYoung/Portfolio">Source code on Github</Link>
                </Stack>
            </Grid>
        </Stack>
    );
};
