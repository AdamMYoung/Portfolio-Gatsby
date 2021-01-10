import React from 'react';
import Layout from '../../components/layout';
import Image from '../../components/image';

type Props = {
    title: string;
    description: string;
    src: string;
    alt: string;
};

const InfoPage: React.FC<Props> = (props) => {
    const { title, description, src, alt, children } = props;

    return (
        <Layout title={title} description={description}>
            <div className="flex">
                <div className="md:w-1/2 xl:w-3/5">{children}</div>
                <Image src={src} alt={alt} className="md:w-1/2 xl:w-2/5 mb-auto hidden md:block -mt-12" />
            </div>
        </Layout>
    );
};

export default InfoPage;
