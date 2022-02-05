import {
    LightMode,
    Icon,
    Box,
    Button,
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
} from '@chakra-ui/react';
import { FaAsterisk, FaBook, FaSearch, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import React from 'react';

import { Link } from '~components/link';
import { useJobs, useJobStats } from '~hooks/static-queries';
import { dateToMonthYear } from '~utils/date';
import { MarkdownRenderer } from '~components/markdown-renderer';
import { SEO } from '~views/seo';

const PageBreak = () => {
    return (
        <Box
            display="block"
            sx={{
                '@media print': {
                    pageBreakBefore: 'always',
                    pageBreakInside: 'avoid',
                },
            }}
        />
    );
};

const CVHeader = () => {
    return (
        <Grid
            gap="4"
            gridTemplateColumns={['1fr', null, '2fr 1fr']}
            sx={{ '@media print': { gridTemplateColumns: '2fr 1fr' } }}
        >
            <Heading
                as={Link}
                color="black"
                fontWeight="bold"
                fontSize="5xl"
                textAlign={['center', null, 'left']}
                sx={{ '@media print': { fontSize: '4xl', textAlign: 'left' } }}
                href="/"
            >
                Adam Young
            </Heading>
            <Stack spacing="1" textAlign={['center', null, 'right']} sx={{ '@media print': { textAlign: 'right' } }}>
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
        <>
            <PageBreak />
            <Stack gap="2" className="contentEntry">
                <HStack spacing="4">
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
                                    {dateToMonthYear(job.startDate)} -{' '}
                                    {job.endDate ? dateToMonthYear(job.endDate) : 'Now'}
                                </Text>
                            </Stack>
                            <Flex gap="1" flexWrap="wrap">
                                {job.technologies.map((t) => (
                                    <Tag key={t} sx={{ '@media print': { border: '1px solid currentColor' } }}>
                                        {t}
                                    </Tag>
                                ))}
                                {job.services.map((t) => (
                                    <Tag
                                        colorScheme="green"
                                        sx={{ '@media print': { border: '1px solid currentColor' } }}
                                        key={t}
                                    >
                                        {t}
                                    </Tag>
                                ))}
                                {job.languages.map((t) => (
                                    <Tag
                                        colorScheme="blue"
                                        sx={{ '@media print': { border: '1px solid currentColor' } }}
                                        key={t}
                                    >
                                        {t}
                                    </Tag>
                                ))}
                            </Flex>
                            <MarkdownRenderer markdown={job.description} />
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    );
};

const CVAbout = () => {
    return (
        <Stack gap="2" className="contentEntry">
            <HStack spacing="4">
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

const CVReferences = () => {
    return (
        <Stack gap="2" className="contentEntry">
            <HStack spacing="4">
                <Icon as={FaAsterisk} color="blue.800" boxSize="8" />
                <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                    References
                </Heading>
            </HStack>
            <Text>References are available upon request.</Text>
        </Stack>
    );
};

const CVSkills = () => {
    const { technologies, services, languages } = useJobStats();

    return (
        <Stack gap="2" className="contentEntry">
            <HStack spacing="4">
                <Icon as={FaBook} color="blue.800" boxSize="8" />
                <Heading as="h2" fontSize="3xl" fontWeight="semibold">
                    Skills
                </Heading>
            </HStack>
            <Text>
                Below you'll find a list of technologies, services, and languages that I've used recently. The list
                isn't exhaustive, but gives a good overview of what I've been doing recently.
            </Text>
            <Grid
                gridTemplateColumns={['1fr', null, 'repeat(3, 1fr)']}
                sx={{ '@media print': { gridTemplateColumns: 'repeat(3,1fr)' } }}
                gap="4"
            >
                <Stack>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold">
                        Technologies
                    </Heading>
                    <Grid gap="1">
                        {Array.from(technologies)
                            .slice(0, 8)
                            .map((t) => (
                                <Tag key={t} sx={{ '@media print': { border: '1px solid currentColor' } }}>
                                    {t}
                                </Tag>
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
                                <Tag
                                    colorScheme="green"
                                    sx={{ '@media print': { border: '1px solid currentColor' } }}
                                    key={s}
                                >
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
                                <Tag
                                    colorScheme="blue"
                                    sx={{ '@media print': { border: '1px solid currentColor' } }}
                                    key={l}
                                >
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
        <>
            <PageBreak />
            <Stack gap="2" className="contentEntry">
                <HStack spacing="4">
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
        </>
    );
};

const CV = () => {
    return (
        <Container maxW="container.xl">
            <SEO title="CV" description="My CV, detailing my experience, education, and skillset." canonical="/cv/" />
            <LightMode>
                <Box
                    mx="auto"
                    p={[4, null, 12]}
                    bg="white"
                    color="black"
                    maxWidth="container.lg"
                    rounded="sm"
                    sx={{
                        my: [4, null, 12],
                        dropShadow: 'md',
                        boxShadow: 'lg',
                        '.contentEntry': { mt: [4, null, 12] },
                        '@media print': {
                            margin: 0,
                            size: 'A4',
                            rounded: 'none',
                            dropShadow: 'none',
                            boxShadow: 'none',
                            '.contentEntry': {
                                mt: 8,
                            },
                        },
                    }}
                >
                    <Box>
                        <CVHeader />
                        <CVAbout />
                        <CVSkills />
                        <CVExperience />
                        <CVEducation />
                        <CVReferences />
                        <Text textAlign="center" mt="12" sx={{ '@media print': { display: 'none' } }}>
                            This resumé is auto-generated, and can be easily printed. Why not give it a{' '}
                            <Link onClick={() => window.print()}>try</Link>?
                        </Text>
                    </Box>
                </Box>
            </LightMode>
        </Container>
    );
};

export default CV;
