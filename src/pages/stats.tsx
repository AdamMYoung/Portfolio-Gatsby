import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import { Stat, StatHelpText, StatNumber } from '@chakra-ui/stat';
import React, { useMemo, VFC } from 'react';
import { useBlogPosts } from '../hooks/static-queries/use-blog-posts';
import { useGithubStats } from '../hooks/static-queries/use-github-stats/useGithubStats';
import { usePopularLanguage } from '../hooks/static-queries/use-popular-language';
import { usePopularTopic } from '../hooks/static-queries/use-popular-topic';
import { Layout } from '../views';
import { SEO } from '../views/seo/SEO';

const Stats: VFC = () => {
    const stats = useGithubStats();
    const blogs = useBlogPosts();

    const popularTopic = usePopularTopic();
    const popularLanguage = usePopularLanguage();

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
                            <StatNumber>{stats.totalContributions}</StatNumber>
                            <StatHelpText>Commits on GitHub</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>{stats.repositories.length}</StatNumber>
                            <StatHelpText>Open-source repositories</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>{popularLanguage}</StatNumber>
                            <StatHelpText>Most popular language</StatHelpText>
                        </Stat>
                    </Grid>
                </Stack>
                <Stack>
                    <Heading as="h2" fontSize="lg">
                        Blog
                    </Heading>
                    <Grid gridTemplateColumns={['1fr 1fr', null, '1fr 1fr 1fr']}>
                        <Stat>
                            <StatNumber>{blogs.length}</StatNumber>
                            <StatHelpText>Articles published</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>{popularTopic}</StatNumber>
                            <StatHelpText>Most popular topic</StatHelpText>
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
