import * as React from 'react';

import List from '../components/list';
import ImageCard from '../components/image-card';
import image from '../images/Successful completion of project.svg';
import { graphql } from 'gatsby';
import { FluidImageSharp } from '../types';
import InfoPage from '../views/info-page';
import Link from '../components/link';

type Props = {
    data: {
        finance: FluidImageSharp;
        vocalia: FluidImageSharp;
        hobbyist: FluidImageSharp;
    };
};

const Projects = (props: Props) => {
    const { finance, vocalia, hobbyist } = props.data;

    return (
        <InfoPage
            title="Projects"
            description="Personal projects I've worked on or currently in progress."
            src={image}
            alt="Illustration of man working on a laptop in a tent"
        >
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg font-semibold">
                Below you'll find a few of the various projects I've worked on in my spare time. You can find all my
                public projects on my
                <Link className="inline-block" type="external" to="https://www.github.com/AdamMYoung">
                    GitHub
                </Link>
                page.
            </p>

            <div className="mt-24">
                <List>
                    <List.Item>
                        <ImageCard className="my-2" fluid={vocalia.childImageSharp.fluid} alt="Vocalia">
                            <h2 className="text-xl font-bold">Vocalia</h2>
                            <p className="mt-2">
                                Vocalia is a web-based podcasting platform, which allowed the user to listen and create
                                podcasts within the same ecosystem. The project was built over several months as part of
                                my final year project at university, developed using WebRTC standards and a deep focus
                                into PWA capabilities such as mobile media-player integration.
                            </p>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-2" fluid={finance.childImageSharp.fluid} alt="AYDev Finance">
                            <h2 className="text-xl font-bold">AYDev | Finance</h2>
                            <p className="mt-2">
                                AYDev | Finance is a web-based financial management app. It provides overview and
                                historical analysis of purchases, supports recurring payments and offline functionality
                                as a Progressive Web App. The site is built using React, with Redux and redux-thunk
                                middleware providing offline storage and backup functionality.
                            </p>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-2" fluid={hobbyist.childImageSharp.fluid} alt="AYDev Finance">
                            <h2 className="text-xl font-bold">Hobbyist.</h2>
                            <p className="mt-2">
                                Hobbyist is a social media designed to connect you to people with similar interests. It
                                promotes sharing of user's creations, and building communities between like-minded
                                individuals. The site was built with a React/TailwindCSS front-end, with a serverless
                                back-end built using Cosmos DB, Azure Functions and Azure API Management. Authentication
                                is provided by Auth0, with payment support integrated with Stripe.
                            </p>
                        </ImageCard>
                    </List.Item>
                </List>
            </div>
        </InfoPage>
    );
};

export const query = graphql`
    query {
        finance: file(relativePath: { eq: "finance.jpg" }) {
            ...fluidImage
        }
        vocalia: file(relativePath: { eq: "vocalia.png" }) {
            ...fluidImage
        }
        hobbyist: file(relativePath: { eq: "hobbyist.png" }) {
            ...fluidImage
        }
    }
`;

export default Projects;
