import React, { VFC } from 'react';
import { Divider, Flex, Grid, Heading, Stack } from '@chakra-ui/layout';
import { mode } from '@chakra-ui/theme-tools';
import { Link } from '../../../components';
import { IconButton } from '@chakra-ui/react';

export const Footer: VFC = () => {
    return (
        <Stack spacing="12" mt="12">
            <Divider />

            <Grid
                gap={['12', null, '8']}
                textAlign={['center', null, 'left']}
                gridTemplateColumns={['1fr', null, '2fr 1fr 1fr']}
            >
                <Stack spacing="6">
                    <Heading fontSize="xl">Socials</Heading>
                    <Flex justifyContent={['center', null, 'flex-start']} sx={{ '* + *': { ml: 2 } }}>
                        <IconButton />
                        <IconButton />
                        <IconButton />
                        <IconButton />
                    </Flex>
                </Stack>

                <Stack spacing="6">
                    <Heading fontSize="xl">Contact</Heading>
                    <Grid gap="1" gridTemplateColumns={['repeat(2, 1fr)', null, '1fr']}>
                        <Link color="primary" href="/blog">
                            Q&A
                        </Link>
                        <Link color="primary" href="/blog">
                            Email
                        </Link>
                    </Grid>
                </Stack>
                <Stack spacing="6">
                    <Heading fontSize="xl">Sitemap</Heading>
                    <Grid gap="1" gridTemplateColumns={['repeat(2, 1fr)', null, '1fr']}>
                        <Link color="primary" href="/blog">
                            Blog
                        </Link>
                        <Link color="primary" href="/blog">
                            Q&A
                        </Link>
                        <Link color="primary" href="/projects">
                            Projects
                        </Link>
                        <Link color="primary" href="/stats">
                            Stats
                        </Link>
                        <Link color="primary" href="/uses">
                            Uses
                        </Link>
                    </Grid>
                </Stack>
            </Grid>
        </Stack>
    );
};
