import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type FeaturedArticle = {
    createdAt: string;
    slug: string;
    title: string;
    topics: string[];
    summary: {
        summary: string;
    };
    copy: {
        readingTime: string;
    };
    heroImage: { localFile: IGatsbyImageData };
};

/**
 * Static query hook to return the currently featured article from the CMS.
 */
export const useFeaturedArticle = () => {
    const data = useStaticQuery<{ contentfulGlobal: { featuredArticle: FeaturedArticle } }>(graphql`
        {
            contentfulGlobal {
                featuredArticle {
                    createdAt
                    slug
                    title
                    topics
                    summary {
                        summary
                    }
                    copy {
                        readingTime
                    }
                    heroImage {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(width: 600)
                            }
                        }
                    }
                }
            }
        }
    `);

    return data.contentfulGlobal.featuredArticle;
};
