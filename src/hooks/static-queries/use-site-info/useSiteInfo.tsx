import { graphql, useStaticQuery } from 'gatsby';

export type SiteInfo = {
    buildTime: string;
    siteMetadata: {
        siteUrl: string;
        siteWwwUrl: string;
        title: string;
        description: string;
    };
};

export const useSiteInfo = (): SiteInfo => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    siteUrl
                    siteWwwUrl
                    description
                }
                buildTime
            }
        }
    `);

    return data.site;
};
