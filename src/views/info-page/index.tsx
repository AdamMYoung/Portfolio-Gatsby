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
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-1/2 xl:w-3/5 order-1 md:order-0">{children}</div>
                <Image
                    src={src}
                    alt={alt}
                    className="h-80 md:h-auto w-full mx-auto order-0 md:order-1 md:w-1/2 xl:w-2/5 mb-auto -mt-12"
                />
            </div>
        </Layout>
    );
};

export default InfoPage;
