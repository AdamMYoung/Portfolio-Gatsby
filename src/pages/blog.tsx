import * as React from 'react';

import Layout from '../components/layout';
import List from '../components/list';
import Image from '../components/image';
import image from '../images/Relaxing on a weekend.svg';
import InfoPage from '../views/info-page';

// markup
const Index = () => {
    return (
        <InfoPage
            title="Blog"
            description="A collection of tips and guides relating to software development."
            src={image}
            alt="Illustration of man working on a laptop in a tent"
        >
            <h1 className="text-5xl font-bold mb-4">Blog</h1>

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

export default Index;
