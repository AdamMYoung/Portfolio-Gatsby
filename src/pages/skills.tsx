import * as React from 'react';
import ImageRowCard from '../components/image-row-card';

import List from '../components/list';
import InfoPage from '../views/info-page';
import image from '../images/Code Version Control.svg';
import csharp from '../images/csharp.svg';
import css from '../images/css.svg';
import docker from '../images/docker.svg';
import dotnet from '../images/dotnet.svg';
import gatsby from '../images/gatsby.svg';
import github from '../images/github.svg';
import html5 from '../images/html5.svg';
import kotlin from '../images/kotlin.svg';
import nodejs from '../images/nodejs.svg';
import npm from '../images/npm.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';
import typescript from '../images/typescript.svg';

const frontEndImages = [
    { src: html5, alt: 'HTML5' },
    { src: css, alt: 'CSS' },
    { src: typescript, alt: 'TypeScript' },
    { src: gatsby, alt: 'Gatsby' },
    { src: react, alt: 'Redux' },
    { src: redux, alt: 'Redux' },
];

const backEndImages = [
    { src: csharp, alt: 'C#' },
    { src: kotlin, alt: 'Kotlin' },
    { src: dotnet, alt: '.NET' },
    { src: nodejs, alt: 'Node.js' },
];

const devOpsImages = [
    { src: docker, alt: 'Docker' },
    { src: github, alt: 'GitHub' },
    { src: npm, alt: 'NPM' },
];

// markup
const Skills = () => {
    return (
        <InfoPage
            title="Skills"
            description="Skills I've developed throughout my software development career."
            src={image}
            alt="Illustration of man working on a laptop in a tent"
        >
            <h1 className="text-5xl font-bold mb-4">Skills</h1>
            <p className="text-lg font-semibold">
                Below are some of the skills I've developed throughout my career ranging across front-end, back-end and
                DevOps.
            </p>

            <List className="mt-24">
                <List.Item>
                    <ImageRowCard title="Front-end" className="mb-4" imgSet={frontEndImages}>
                        <p>
                            The main focus of my career has been in front-end development, with SPA libraries and
                            technologies being my "bread-and-butter". Technologies such as React and Gatsby are what I
                            spend most of my days in, alongside popular JS libraries such as Redux, TailwindCSS and many
                            others.
                        </p>
                        <p className="mt-2">
                            My programming language of choice is TypeScript, due to it's type safety and deep
                            integration with React.
                        </p>
                    </ImageRowCard>
                </List.Item>
                <List.Item>
                    <ImageRowCard title="Back-end" className="my-4" imgSet={backEndImages}>
                        <p>
                            When working on back-end frameworks, I typically prefer .NET Core, due to it's familiarity
                            and widespread use across the industry. Recently I've been using more Node.js API endpoints
                            in the form of Azure Functions, allowing me to maintain type definitions between several
                            projects.
                        </p>
                    </ImageRowCard>
                </List.Item>

                <List.Item>
                    <ImageRowCard title="DevOps" className="my-4" imgSet={devOpsImages}>
                        <p>
                            I also have experience setting up deployment pipelines and configuring Azure resources. One
                            of the main projects using these technologies is my hobbyist app, which is a fully
                            serverless application built on Cosmos DB, Azure Functions and the Azure Management API.
                        </p>
                    </ImageRowCard>
                </List.Item>
            </List>
        </InfoPage>
    );
};

export default Skills;
