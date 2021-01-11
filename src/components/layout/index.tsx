import React from 'react';
import Helmet from 'react-helmet';

import Footer from './footer';
import Navigation from './navigation';

type Props = {
    title: string;
    description?: string;
};

const Layout: React.FC<Props> = (props) => {
    return (
        <div className="bg-indigo-900 text-white">
            <Helmet>
                <title>{props.title}</title>
                {props.description && <meta name="description" content={props.description} />}
            </Helmet>
            <Navigation />
            <main className="min-h-screen container mt-8">{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
