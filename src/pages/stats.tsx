import {
    Button,
    Divider,
    Grid,
    Heading,
    Progress,
    Stack,
    Stat,
    StatHelpText,
    StatNumber,
    Tag,
    Text,
} from '@chakra-ui/react';
import React, { VFC } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { useBlogPosts, useGithubStats, usePopularLanguage, usePopularTopic, useSiteInfo } from '~hooks/static-queries';
import { Layout, SEO } from '~views';
import { useIsMobile } from '~hooks/use-is-mobile';
import { LinkButton } from '~components/link-button';

dayjs.extend(relativeTime);

const Stats: VFC = () => {
    const isMobile = useIsMobile();
    const { buildTime } = useSiteInfo();

    const stats = useGithubStats();
    const blogs = useBlogPosts();

    const popularTopic = usePopularTopic();
    const popularLanguage = usePopularLanguage();

    return (
        <Layout>
            <SEO title="Stats" description="Statistics across my development career, skills and more." />
            <Stack spacing="4">
                <Stack spacing="4">
                    <Heading as="h2" fontSize="xl" fontWeight="bold">
                        Github
                    </Heading>
                    <Grid gridTemplateColumns={['1fr', null, '1fr 1fr 1fr']} gap="4">
                        <Stat>
                            <StatNumber>{stats.totalContributions}</StatNumber>
                            <StatHelpText>Commits on GitHub</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>{stats.repositories.length}</StatNumber>
                            <StatHelpText>Open-source repositories</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>
                                <Tag
                                    as={LinkButton}
                                    size="lg"
                                    py="0"
                                    mb="2"
                                    _hover={{ bg: 'red.600' }}
                                    href={`/projects`}
                                >
                                    {popularLanguage}
                                </Tag>
                            </StatNumber>
                            <StatHelpText>Most popular language</StatHelpText>
                        </Stat>
                    </Grid>
                </Stack>
                {isMobile && <Divider />}
                <Stack>
                    <Heading as="h2" fontSize="xl" fontWeight="bold">
                        Blog
                    </Heading>
                    <Grid gridTemplateColumns={['1fr', null, '1fr 1fr 1fr']} gap="4">
                        <Stat>
                            <StatNumber>{blogs.length}</StatNumber>
                            <StatHelpText>Articles published</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>
                                <Tag
                                    as={LinkButton}
                                    size="lg"
                                    py="0"
                                    mb="2"
                                    _hover={{ bg: 'red.600' }}
                                    href={`/blog?filters=${popularTopic}`}
                                >
                                    {popularTopic}
                                </Tag>
                            </StatNumber>
                            <StatHelpText>Most popular topic</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatNumber>{dayjs().to(buildTime)}</StatNumber>
                            <StatHelpText>Last built</StatHelpText>
                        </Stat>
                    </Grid>
                </Stack>
                {isMobile && <Divider />}
                <Stack spacing="4">
                    <Heading as="h2" fontSize="xl" fontWeight="bold">
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
