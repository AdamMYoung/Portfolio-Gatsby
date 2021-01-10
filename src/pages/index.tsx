import * as React from 'react';

import List from '../components/list';
import image from '../images/Work from home.svg';
import InfoPage from '../views/info-page';

// markup
const Index = () => {
    return (
        <InfoPage
            title="Home"
            description="Adam Young. Front-end developer working in Birmingham, specializing in React and SPA development."
            src={image}
            alt="Illustration of man working on a laptop in a tent"
        >
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Adam!</h1>
            <p className="text-lg font-semibold">
                I'm a front-end software developer working in Birmingham, with a passion for exploration and learning.
            </p>

            <div className="mt-24">
                <h2 className="text-4xl font-bold mb-4">Recent blog posts</h2>
                <List active>
                    <List.Item>Post 1</List.Item>
                    <List.Item>Post 2</List.Item>
                    <List.Item>Post 3</List.Item>
                </List>
            </div>
        </InfoPage>
    );
};

export default Index;
