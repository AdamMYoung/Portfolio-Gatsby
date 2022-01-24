import { chakra, Text, Flex, Stack, Tag } from '@chakra-ui/react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { MarkdownRenderer } from '~components/markdown-renderer';

import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { useJobs } from '~hooks/static-queries';
import { stringToMonthYear } from '~utils/date';

import { SEO } from '~views/seo';

const ChakraGatsbyImage = chakra(GatsbyImage);

const CareerIntro = () => {
    return (
        <TwoPanel disableMotion>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle as="h1">Career and Experience</TwoPanelTitle>
                </TwoPanelHeading>
                <TwoPanelSubtitle>
                    Find a breakdown of my experience, along with technologies, languages, services and the skills I've
                    built, below.
                </TwoPanelSubtitle>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ height: '100%', borderRadius: '12px' }}
                    src="../images/career.jpg"
                    alt="Man holding a book, wearing a satchel, stood in the road."
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const Career: VFC = () => {
    const jobs = useJobs();

    return (
        <Stack spacing={[16, null, 24]}>
            <SEO
                title="Career"
                description="A breakdown of my career and experience with languages, technologies and services."
                canonical="/"
            />

            <CareerIntro />

            {jobs.map((job, index) => (
                <TwoPanel gridTemplateColumns={['1fr', null, null, '1fr 1.2fr']} key={job.companyName}>
                    {index % 2 === 0 && (
                        <TwoPanelImage>
                            <ChakraGatsbyImage
                                w="full"
                                pointerEvents="none"
                                rounded="xl"
                                image={getImage(job.image)}
                                alt={job.companyName}
                            />
                        </TwoPanelImage>
                    )}

                    <TwoPanelBlock>
                        <TwoPanelHeading>
                            <TwoPanelTitle>{job.companyName}</TwoPanelTitle>
                            <TwoPanelSubtitle>{job.role}</TwoPanelSubtitle>

                            <TwoPanelSubtitle fontSize="md">
                                {stringToMonthYear(job.startDate)} -{' '}
                                {job.endDate ? stringToMonthYear(job.endDate) : 'Now'}
                            </TwoPanelSubtitle>
                        </TwoPanelHeading>
                        <TwoPanelBody>
                            <Flex gap="2" wrap="wrap">
                                {job.languages.map((lang) => (
                                    <Tag key={lang} colorScheme="green">
                                        {lang}
                                    </Tag>
                                ))}
                                {job.technologies.map((tech) => (
                                    <Tag key={tech} colorScheme="red">
                                        {tech}
                                    </Tag>
                                ))}
                                {job.services.map((service) => (
                                    <Tag key={service} colorScheme="blue">
                                        {service}
                                    </Tag>
                                ))}
                            </Flex>
                        </TwoPanelBody>
                        <TwoPanelBody>
                            <MarkdownRenderer markdown={job.description} />
                        </TwoPanelBody>
                    </TwoPanelBlock>

                    {index % 2 !== 0 && (
                        <TwoPanelImage>
                            <ChakraGatsbyImage
                                w="full"
                                height="96"
                                pointerEvents="none"
                                rounded="xl"
                                image={getImage(job.image)}
                                alt={job.companyName}
                            />
                        </TwoPanelImage>
                    )}
                </TwoPanel>
            ))}
        </Stack>
    );
};

export default Career;
