import * as React from 'react';

import Layout from '../components/layout';
import List from '../components/list';
import Image from '../components/image';
import image from '../images/Code Version Control.svg';
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
                I'm a front-end software developer working in Birmingham, with a passion for exploration and learning.
            </p>

            <div className="mt-24">
                <h2 className="text-4xl font-bold mb-4">Recent blog posts</h2>
                <List>
                    <List.Item>Post 1</List.Item>
                    <List.Item>Post 2</List.Item>
                    <List.Item>Post 3</List.Item>
                </List>
            </div>
        </InfoPage>
    );
};

export default Skills;
