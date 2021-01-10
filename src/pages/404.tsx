import * as React from 'react';

import Layout from '../components/layout';
import List from '../components/list';
import Image from '../components/image';
import image from '../images/Remote working challenges.svg';

// markup
const NotFound = () => {
    return (
        <Layout title="Not found">
            <div className="flex">
                <div>
                    <h1 className="text-5xl font-bold mb-4">Page not found.</h1>

                    <div className="mt-24">
                        <h2 className="text-4xl font-bold mb-4">Recent blog posts</h2>
                        <List>
                            <List.Item>Post 1</List.Item>
                            <List.Item>Post 2</List.Item>
                            <List.Item>Post 3</List.Item>
                        </List>
                    </div>
                </div>

                <Image
                    src={image}
                    alt="Illustration of man working on a laptop in a tent"
                    className="w-1/2 mb-auto hidden md:block -mt-12"
                />
            </div>
        </Layout>
    );
};

export default NotFound;
