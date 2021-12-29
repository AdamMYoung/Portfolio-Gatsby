import { graphql, useStaticQuery } from 'gatsby';
import { BlogPostOverview } from '~types';

/**
 * Static query hook to return all blog posts from the CMS.
 */
export const useBlogPosts = () => {
    const posts = useStaticQuery<{ allContentfulPageBlogPost: { nodes: BlogPostOverview[] } }>(graphql`
        {
            allContentfulPageBlogPost(sort: { order: DESC, fields: createdAt }) {
                nodes {
                    createdAt
                    id
                    topics
                    title
                    slug
                    copy {
                        readingTime
                    }
                    heroImage {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                    }
                }
            }
        }
    `);

    return posts.allContentfulPageBlogPost.nodes;
};
