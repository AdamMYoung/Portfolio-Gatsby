import { chakra, Flex, Stack } from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { VFC } from "react";
import { TwoPanel, TwoPanelBlock, TwoPanelBody, TwoPanelHeading, TwoPanelImage, TwoPanelSubtitle, TwoPanelTitle } from "~components/sections/two-panel";
import { useJobs } from "~hooks/static-queries";

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

            {jobs.map((job, index) => <TwoPanel key={job.companyName}>
                {index % 2 === 0 && <TwoPanelImage>
                    <ChakraGatsbyImage
                        h="full"
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
                        <TwoPanelBody>
                            <Flex gap="2">

                            </Flex>
                        </TwoPanelBody>
                    </TwoPanelHeading>
                </TwoPanelBlock>

                {index % 2 !== 0 && <TwoPanelImage>
                    <ChakraGatsbyImage
                        h="full"
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

