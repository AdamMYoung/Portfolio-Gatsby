import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import { Stat, StatHelpText, StatNumber } from '@chakra-ui/stat';
import React, { VFC } from 'react';
import { Layout } from '../views';
import { SEO } from '../views/seo/SEO';

const Stats: VFC = () => {
    return (
        <Layout>
            <SEO title="Stats" description="Statistics across my development career, skills and more." />
            <Stack spacing="4">
                <Heading as="h1">My Stats</Heading>
                <Stack>
                    <Heading as="h2" fontSize="lg">
                        Github
                    </Heading>
                    <Grid gridTemplateColumns={['1fr 1fr', null, '1fr 1fr 1fr']}>
                        <Stat>
                            <StatNumber>42</StatNumber>
                            <StatHelpText>Commits in the past year</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>12</StatNumber>
                            <StatHelpText>Open-source repositories</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>469</StatNumber>
                            <StatHelpText>Something else to report</StatHelpText>
                        </Stat>
                    </Grid>
                </Stack>
                <Stack>
                    <Heading as="h2" fontSize="lg">
                        Blog
                    </Heading>
                    <Grid gridTemplateColumns={['1fr 1fr', null, '1fr 1fr 1fr']}>
                        <Stat>
                            <StatNumber>42</StatNumber>
                            <StatHelpText>Articles published</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>12</StatNumber>
                            <StatHelpText>Visitors to the site</StatHelpText>
                        </Stat>
                    </Grid>
                </Stack>
                <Stack spacing="4">
                    <Heading as="h2" fontSize="lg">
                        Languages
                    </Heading>
                    <Stack spacing="4">
                        <Text>React (Gatsby/Next.js)</Text>
                        <Progress rounded="xl" value={90} />
                    </Stack>
                    <Stack spacing="4">
                        <Text>TypeScript</Text>
                        <Progress rounded="xl" value={80} />
                    </Stack>
                    <Stack spacing="4">
                        <Text>Node.js</Text>
                        <Progress rounded="xl" value={60} />
                    </Stack>
                    <Stack spacing="4">
                        <Text>C#</Text>
                        <Progress rounded="xl" value={30} />
                    </Stack>
                    <Stack spacing="4">
                        <Text>Python</Text>
                        <Progress rounded="xl" value={20} />
                    </Stack>
                    <Stack spacing="4">
                        <Text>Clojure</Text>
                        <Progress rounded="xl" value={5} />
                    </Stack>
                </Stack>
            </Stack>
        </Layout>
    );
};

export default Stats;
