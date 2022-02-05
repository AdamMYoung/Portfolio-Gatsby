
import {
    LightMode,
    Icon,
    Box,
    Grid,
    Heading,
    Stack,
    Flex,
    Tag,
    Text,
    chakra,
    Divider,
    HStack,
    UnorderedList,
    ListItem,
    Container,
    useMediaQuery
} from '@chakra-ui/react';
import { FaBook, FaSearch, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import React from 'react';

import { Link } from '~components/link';
import { useJobs, useJobStats } from '~hooks/static-queries';
import { dateToMonthYear } from '~utils/date';
import { MarkdownRenderer } from '~components/markdown-renderer';
import { SEO } from '~views/seo';

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
        <Stack spacing="6">
            <HStack>
                <Icon as={FaUserTie} color="blue.800" boxSize="8" />
                <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                    Experience
                </Heading>
            </HStack>
            <Stack spacing="6" divider={<Divider borderColor="gray.400" />}>
                {jobs.map((job) => (
                    <Stack spacing="4" key={job.companyName}>
                        <Stack>
                            <Heading as="h3" fontWeight="semibold" fontSize="lg">
                                {job.companyName} <chakra.span color="blue.800"> | {job.role}</chakra.span>
                            </Heading>
                            <Text color="gray.600" fontWeight="semibold">
                                {dateToMonthYear(job.startDate)} - {job.endDate ? dateToMonthYear(job.endDate) : 'Now'}
                            </Text>
                        </Stack>
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
                        <MarkdownRenderer markdown={job.description} />
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

const CVAbout = () => {
    return (
        <Stack spacing="6">
            <HStack>
                <Icon as={FaSearch} color="blue.800" boxSize="8" />
                <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                    About
                </Heading>
            </HStack>
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
        <Stack spacing="6">
            <HStack>
                <Icon as={FaBook} color="blue.800" boxSize="8" />
                <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                    Skills
                </Heading>
            </HStack>
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

const CVEducation = () => {
    return (
        <Stack spacing="6" >
            <HStack>
                <Icon as={FaUserGraduate} color="blue.800" boxSize="8" />
                <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                    Education
                </Heading>
            </HStack>
            <Stack spacing="4">
                <Heading as="h3" fontWeight="semibold" fontSize="lg">
                    Teesside University <chakra.span color="blue.800"> | BSc Computer Science</chakra.span>
                </Heading>

                <Text>
                    My studies at Teesside University from 2015 to 2019 provided with industry-standard skills in
                    software development and computer science, such as:
                </Text>
                <UnorderedList pl="8" className="studies">
                    <ListItem>Software patterns and application architecture.</ListItem>
                    <ListItem>Relational database design.</ListItem>
                    <ListItem>.NET and .NET Core application development.</ListItem>
                    <ListItem>
                        Experience across a wide variety of languages (C#, Java, Ada, JavaScript/TypeScript) and
                        platforms (Web, Windows, Android, Arduino).
                    </ListItem>
                </UnorderedList>
                <Text>My FYP (Vocalia) provided me with a great deal of experience in areas such as:</Text>
                <UnorderedList pl="8">
                    <ListItem>SPA development within React.</ListItem>
                    <ListItem>PWA development within the Google standard implementation.</ListItem>
                    <ListItem>
                        API development within a microservice architecture, containerized with docker compose.
                    </ListItem>
                    <ListItem>Experience in CI/CD and DevOps within Microsoft Azure.</ListItem>
                </UnorderedList>
            </Stack>
        </Stack>
    );
};

const CV = () => {


    return (
        <Container maxW="container.xl">
            <SEO
                title="CV"
                description="My CV, detailing my experience, education, and skillset."
                canonical="/cv/"
            />
            <LightMode>
                <Box
                    mx="auto"
                    p="12"
                    bg="white"
                    color="black"
                    maxWidth="container.lg"
                    rounded="md"
                    sx={{
                        my: 12,
                        dropShadow: "md",
                        boxShadow: "lg",
                        "@media print": {
                            margin: 0,
                            dropShadow: "none",
                            boxShadow: "none",
                        }
                    }}
                >
                    <Stack spacing="12" className="printable">
                        <CVHeader />
                        <CVAbout />
                        <CVSkills />
                        <CVExperience />
                        <CVEducation />
                    </Stack>
                </Box>
            </LightMode>
        </Container>
    );
};

export default CV;
