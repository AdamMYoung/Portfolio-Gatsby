import { chakra, Text, Flex, Stack, Tag } from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { VFC } from "react";

import { TwoPanel, TwoPanelBlock, TwoPanelBody, TwoPanelHeading, TwoPanelImage, TwoPanelSubtitle, TwoPanelTitle } from "~components/sections/two-panel";
import { useJobs } from "~hooks/static-queries";
import { stringToMonthYear } from "~utils/date";

import { SEO } from "~views/seo";

const ChakraGatsbyImage = chakra(GatsbyImage);

const Career: VFC = () => {
    const jobs = useJobs()

    return (
        <Stack spacing={[16, null, 24]}>
            <SEO
                title="Career"
                description="Hi, I'm Adam Young, a Software Engineer from Birmingham currently working at Curve. Here, you'll find articles about software development, my interests, and the projects I've currently got on the go."
                canonical="/"
            />

            {jobs.map((job, index) => <TwoPanel gridTemplateColumns={['1fr', null, null, '1fr 1.2fr']} key={job.companyName}>
                {index % 2 === 0 && <TwoPanelImage alignSelf="center">
                    <ChakraGatsbyImage
                        w="full"
                        pointerEvents="none"
                        rounded="xl"
                        image={getImage(job.image)}
                        alt={job.companyName}
                    />
                </TwoPanelImage>}

                <TwoPanelBlock>
                    <TwoPanelHeading>
                        <TwoPanelTitle>{job.companyName}</TwoPanelTitle>
                        <TwoPanelSubtitle>{job.role}</TwoPanelSubtitle>

                        <TwoPanelSubtitle fontSize="md">{stringToMonthYear(job.startDate)} - {job.endDate ? stringToMonthYear(job.endDate) : "Now"}</TwoPanelSubtitle>
                    </TwoPanelHeading>
                    <TwoPanelBody>
                        <Flex gap="2" wrap="wrap">
                            {job.languages.map(lang => <Tag colorScheme="green">{lang}</Tag>)}
                            {job.technologies.map(tech => <Tag colorScheme="red">{tech}</Tag>)}
                            {job.services.map(service => <Tag colorScheme="blue">{service}</Tag>)}
                        </Flex>

                    </TwoPanelBody>
                    <TwoPanelBody>
                        <Text>{job.description}</Text>
                    </TwoPanelBody>
                </TwoPanelBlock>

                {index % 2 !== 0 && <TwoPanelImage alignSelf="center">
                    <ChakraGatsbyImage
                        w="full"
                        pointerEvents="none"
                        rounded="xl"
                        image={getImage(job.image)}
                        alt={job.companyName}
                    />
                </TwoPanelImage>}
            </TwoPanel>)
            }
        </Stack >
    );
};

export default Career;

