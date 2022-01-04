import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteInfo } from '~hooks/static-queries';

type SEOProps = {
    title: string;
    description: string;
    canonical: string;
    imageUrl?: string;
    imageAlt?: string;
};

export const SEO: FC<SEOProps> = ({ title, description, imageUrl, imageAlt, canonical, children }) => {
    const { siteMetadata } = useSiteInfo();

    return (
        <Helmet>
            <html lang="en" />
            <title>{`AYDev | ${title}`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

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
