import { graphql, useStaticQuery } from 'gatsby';

type SiteInfo = {
    buildTime: string;
    siteMetadata: {
        siteUrl: string;
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
                    description
                }
                buildTime
            }
        }
    `);

    return data.site;
};
