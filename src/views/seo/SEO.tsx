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

export const SEO: FC<SEOProps> = ({ title, description, imageUrl, imageAlt, children }) => {
    const { siteMetadata } = useSiteInfo();

    return (
        <Helmet>
            <html lang="en" />
            <title>{`AYDev | ${title}`}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:locale" content="en_GB" />
            <link rel="canonical" href={`${siteMetadata.siteUrl}/prints`} />
            <meta property="og:description" content={description} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {imageAlt && <meta property="og:image:alt" content={title} />}
            <meta property="og:site_name" content={imageAlt} />
            {children}
        </Helmet>
    );
};
