import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

type SEOProps = {
    title: string;
    description: string;
    canonical: string;
    imageUrl?: string;
    imageAlt?: string;
};

export const SEO: FC<SEOProps> = ({ title, description, imageUrl, imageAlt, canonical, children }) => {
    return (
        <Helmet>
            <html lang="en" />
            <title>{`AYDev | ${title}`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`https://aydev.uk${canonical}`} />

            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="AYDev" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:description" content={description} />

            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {imageAlt && <meta property="og:image:alt" content={title} />}

            <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#1A202C" media="(prefers-color-scheme: dark)" />

            {children}
        </Helmet>
    );
};
