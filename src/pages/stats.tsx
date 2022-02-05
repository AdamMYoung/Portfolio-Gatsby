import { Divider, Grid, Heading, Progress, Stack, Stat, StatHelpText, StatNumber, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { VFC } from 'react';
import { InteractionTag } from '~components/interaction-tag';
import { useIsMobile } from '~hooks/use-is-mobile';
import {
    useBlogPosts,
    useGithubStats,
    useGithubLanguageListings,
    usePopularTopic,
    useSiteInfo,
} from '~hooks/static-queries';
import { SEO } from '~views/seo';
import { capitalizeFirstLetter } from '~utils/string';
import { Layout } from '~views/layout';

dayjs.extend(relativeTime);

const Stats: VFC = () => {
    const isMobile = useIsMobile();
    const { buildTime } = useSiteInfo();

    const stats = useGithubStats();
    const blogs = useBlogPosts();

    const popularTopic = usePopularTopic();
    const { mostPopular, entries } = useGithubLanguageListings();

    return (
        <Layout>
            <Stack spacing={[16, null, 24]}>
                <SEO
                    title="Stats"
                    description="Statistics across my development career, skills and more."
                    canonical="/stats/"
                />
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
                                    <InteractionTag href={`/projects`}>{mostPopular}</InteractionTag>
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
                                    <InteractionTag href={`/blog?filters=${popularTopic}`}>
                                        {capitalizeFirstLetter(popularTopic)}
                                    </InteractionTag>
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
                        {entries.map((e) => (
                            <Stack key={e.name} spacing="4">
                                <Text>{e.name}</Text>
                                <Progress rounded="xl" value={e.weight} />
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Layout>
    );
};

export default Stats;
