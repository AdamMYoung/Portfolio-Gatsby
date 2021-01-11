import * as React from 'react';

import List from '../components/list';
import image from '../images/Coffee Break.svg';
import InfoPage from '../views/info-page';
import ImageCard from '../components/image-card';
import { graphql } from 'gatsby';
import { FluidImageSharp } from '../types';

type Props = {
    data: {
        teesside: FluidImageSharp;
        quayside: FluidImageSharp;
        dupont: FluidImageSharp;
    };
};

const Work = (props: Props) => {
    const { teesside, quayside, dupont } = props.data;

    return (
        <InfoPage
            title="Work"
            description="Employment history, with brief descriptions of my roles and responsibilities."
            src={image}
            alt="Illustration of man working on a laptop in a tent"
        >
            <h1 className="text-5xl font-bold mb-4">Work</h1>
            <p className="text-lg font-semibold">
                Previous and current job roles I've had within my software development career.
            </p>

            <div className="mt-24">
                <List>
                    <List.Item>
                        <ImageCard className="my-4" fluid={quayside.childImageSharp.fluid} alt="Vocalia">
                            <h2 className="text-xl font-bold">TerraQuest - Developer (2019 - Current).</h2>
                            <p className="mt-2">
                                During my time at TerraQuest, I have worked with a variety of technologies relating to
                                mapping and land referencing. My initial role was straight into the deep end as the
                                primary React developer within the business, supporting existing projects.
                            </p>
                            <p className="mt-2">
                                I quickly became a reliable source within the business, and over the past year have
                                fallen into a more senior role, providing technical guidance to other developers. I've
                                guided various greenfield projects' structure and technology stacks, and lead front-end
                                development on several successful projects.
                            </p>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" fluid={dupont.childImageSharp.fluid} alt="AYDev Finance">
                            <h2 className="text-xl font-bold">
                                DuPont Teijin Films - Student Software Engineer (2017 - 2018).
                            </h2>
                            <p className="mt-2">
                                During my time at DuPont Teijin Films, I worked on numerous projects within the .NET
                                framework, developing for both front-end and back-end. Below are the main projects I was
                                involved in:
                            </p>
                            <List className="mt-2 text-sm list-disc list-inside">
                                <List.Item>Improved system uptime from 60% to 99% over a 6 month timeframe.</List.Item>
                                <List.Item>
                                    Implemented caching systems to improve query times from several minutes to a few
                                    seconds.
                                </List.Item>
                                <List.Item>
                                    Developed C# WPF graphing software to plot production line information across a
                                    variety of data sources..
                                </List.Item>
                                <List.Item>
                                    Designed and developed preventative maintenance client and server software used
                                    throughout the manufacturing line.
                                </List.Item>
                                <List.Item>Rewrote legacy applications into modern, efficient solutions.</List.Item>
                                <List.Item>
                                    Designed and deployed numerous SQL and MySQL databases of varying complexity.
                                </List.Item>
                            </List>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" fluid={teesside.childImageSharp.fluid} alt="AYDev Finance">
                            <h2 className="text-xl font-bold">Teesside University - Student (2015 - 2019).</h2>
                            <p className="mt-2">
                                My studies at Teesside University from 2015 to 2019 provided me with industry-standard
                                skills in Computer Science, such as:
                            </p>
                            <List className="mt-2 text-sm list-disc list-inside">
                                <List.Item>Software patterns and application architecture.</List.Item>
                                <List.Item>Relational database design.</List.Item>
                                <List.Item>.NET and .NET Core application development (WPF, ASP.NET MVC).</List.Item>
                                <List.Item>
                                    Knowledge in a wide variety of programming languages (C#, Java, Ada,
                                    JavaScript/TypeScript).
                                </List.Item>
                                <List.Item>
                                    Development experience across various platforms (Windows, Web, Android, Arduino).
                                </List.Item>
                                <List.Item>SPA development within the React framework.</List.Item>
                                <List.Item>
                                    PWA integration following Google's standards for Chrome implementation.
                                </List.Item>
                                <List.Item>
                                    API development within a microservice architecture, deployed within a container
                                    orchestrator.
                                </List.Item>
                                <List.Item>
                                    Experience in DevOps roles such as deployment and CI/CD within Microsoft Azure.
                                </List.Item>
                            </List>
                        </ImageCard>
                    </List.Item>
                </List>
            </div>
        </InfoPage>
    );
};

export const query = graphql`
    query {
        teesside: file(relativePath: { eq: "teesside.jpg" }) {
            ...fluidImage
        }
        dupont: file(relativePath: { eq: "dupont.jpg" }) {
            ...fluidImage
        }
        quayside: file(relativePath: { eq: "quayside.webp" }) {
            ...fluidImage
        }
    }
`;

export default Work;
