import * as React from 'react';
import ImageCard from '../components/image-card';

import List from '../components/list';
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
import InfoPage from '../views/info-page';

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

            <div className="mt-24">
                <h2 className="text-2xl font-bold">Front-end</h2>
                <List>
                    <List.Item>
                        <ImageCard className="my-4" src={html5} alt="HTML5">
                            <h2 className="text-xl font-bold">HTML5</h2>
                            <p className="mt-2"></p>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={css} alt="CSS">
                            <h2 className="text-xl font-bold">CSS</h2>
                        </ImageCard>
                    </List.Item>

                    <List.Item>
                        <ImageCard className="my-3" src={typescript} alt="TypeScript">
                            <h2 className="text-xl font-bold">TypeScript</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={gatsby} alt="Gatsby">
                            <h2 className="text-xl font-bold">Gatsby</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={react} alt="React">
                            <h2 className="text-xl font-bold">React</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={redux} alt="Redux">
                            <h2 className="text-xl font-bold">Redux</h2>
                        </ImageCard>
                    </List.Item>
                </List>

                <h2 className="text-2xl font-bold mt-12">Back-end</h2>
                <List>
                    <List.Item>
                        <ImageCard className="my-4" src={csharp} alt="C Sharp">
                            <h2 className="text-xl font-bold">C#</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={dotnet} alt=".Net">
                            <h2 className="text-xl font-bold">.NET Core</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={kotlin} alt="Kotlin">
                            <h2 className="text-xl font-bold">Kotlin</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={nodejs} alt="NodeJS">
                            <h2 className="text-xl font-bold">Node.js</h2>
                        </ImageCard>
                    </List.Item>
                </List>

                <h2 className="text-2xl font-bold mt-12">DevOps</h2>
                <List>
                    <List.Item>
                        <ImageCard className="my-4" src={docker} alt="Docker">
                            <h2 className="text-xl font-bold">Docker</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={github} alt="GitHub">
                            <h2 className="text-xl font-bold">GitHub</h2>
                        </ImageCard>
                    </List.Item>
                    <List.Item>
                        <ImageCard className="my-3" src={npm} alt="NPM">
                            <h2 className="text-xl font-bold">NPM</h2>
                        </ImageCard>
                    </List.Item>
                </List>
            </div>
        </InfoPage>
    );
};

export default Skills;
