import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type FeaturedArticle = {
    createdAt: string;
    slug: string;
    title: string;
    summary: {
        summary: string;
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
                    summary {
                        summary
                    }
                    heroImage {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    `);

    return data.contentfulGlobal.featuredArticle;
};
