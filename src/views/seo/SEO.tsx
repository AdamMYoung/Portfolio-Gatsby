import React, { FC, VFC } from 'react';
import { Helmet } from 'react-helmet';

type SEOProps = {
    title: string;
    description: string;
    imageUrl?: string;
    imageAlt?: string;
};

export const SEO: FC<SEOProps> = ({ title, description, imageUrl, imageAlt, children }) => {
    return (
        <Helmet>
            <title>{`AYDev | ${title}`}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:description" content={description} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {imageAlt && <meta property="og:image:alt" content={title} />}
            <meta property="og:site_name" content={imageAlt} />
            {children}
        </Helmet>
    );
};
