import { LightMode, Box, Grid, Heading, Stack, Flex, Tag, Text, chakra, Divider } from '@chakra-ui/react';
import React from 'react';
import { Link } from '~components/link';
import { useJobs, useJobStats } from '~hooks/static-queries';

const CVHeader = () => {
    return (
        <Grid gap="4" gridTemplateColumns="1.5fr 1fr">
            <Heading fontWeight="bold" fontSize="5xl">
                Adam Young
            </Heading>
            <Stack spacing="1" textAlign="right">
                <Link color="black" href="https://aydev.uk">
                    https://aydev.uk
                </Link>
                <Link color="black" href="mailto:adam@aydev.uk">
                    adam@aydev.uk
                </Link>

                <Link color="black" href="https://linkedin.com/in/adammichaelyoung">
                    https://linkedin.com/in/adammichaelyoung
                </Link>

                <Link color="black" href="https://github.com/AdamMYoung">
                    https://github.com/AdamMYoung
                </Link>
            </Stack>
        </Grid>
    );
};

const CVExperience = () => {
    const jobs = useJobs();

    return (
        <Stack>
            <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                Experience
            </Heading>
            <Stack spacing="6" divider={<Divider borderColor="gray.400" />}>
                {jobs.map((job) => (
                    <Stack spacing="4" key={job.companyName}>
                        <Heading as="h3" fontWeight="semibold" fontSize="lg">
                            {job.companyName} <chakra.span color="blue.800"> | {job.role}</chakra.span>
                        </Heading>
                        <Flex gap="1" flexWrap="wrap">
                            {job.technologies.map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                            {job.services.map((t) => (
                                <Tag colorScheme="green" key={t}>
                                    {t}
                                </Tag>
                            ))}
                            {job.languages.map((t) => (
                                <Tag colorScheme="blue" key={t}>
                                    {t}
                                </Tag>
                            ))}
                        </Flex>
                        <Text>{job.description}</Text>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

const CVAbout = () => {
    return (
        <Stack>
            <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                About
            </Heading>
            <Text>
                Experienced software developer with hands-on experience across the full SDLC. Has a strong focus on
                front-end technologies to deliver the best experience possible to the user. My typical day involves
                development, testing, documentation and mentoring within 2 week sprints.
            </Text>
        </Stack>
    );
};

const CVSkills = () => {
    const { technologies, services, languages } = useJobStats();

    return (
        <Stack>
            <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                Skills
            </Heading>
            <Grid gridTemplateColumns="repeat(3, 1fr)" gap="4">
                <Stack>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold">
                        Technologies
                    </Heading>
                    <Grid gap="1">
                        {Array.from(technologies)
                            .slice(0, 8)
                            .map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                    </Grid>
                </Stack>
                <Stack>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold">
                        Services
                    </Heading>
                    <Grid gap="1">
                        {Array.from(services)
                            .slice(0, 8)
                            .map((s) => (
                                <Tag colorScheme="green" key={s}>
                                    {s}
                                </Tag>
                            ))}
                    </Grid>
                </Stack>
                <Stack>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold">
                        Languages
                    </Heading>
                    <Grid gap="1">
                        {Array.from(languages)
                            .slice(0, 8)
                            .map((l) => (
                                <Tag colorScheme="blue" key={l}>
                                    {l}
                                </Tag>
                            ))}
                    </Grid>
                </Stack>
            </Grid>
        </Stack>
    );
};

const CV = () => {
    return (
        <LightMode>
            <Box
                mx="auto"
                p="12"
                bg="white"
                color="black"
                boxShadow="lg"
                maxWidth="container.lg"
                rounded="md"
                dropShadow="md"
            >
                <Stack spacing="12">
                    <CVHeader />
                    <CVAbout />
                    <CVSkills />
                    <CVExperience />
                </Stack>
            </Box>
        </LightMode>
    );
};

export default CV;
