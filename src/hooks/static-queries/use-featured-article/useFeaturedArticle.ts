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
    heroImage: IGatsbyImageData;
};

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
                        gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    `);

    return data.contentfulGlobal.featuredArticle;
};
