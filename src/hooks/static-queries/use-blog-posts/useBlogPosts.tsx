import { graphql, useStaticQuery } from 'gatsby';
import { BlogPost } from '~types';

/**
 * Static query hook to return all blog posts from the CMS.
 */
export const useBlogPosts = () => {
    const posts = useStaticQuery<{ allContentfulPageBlogPost: { nodes: BlogPost[] } }>(graphql`
        {
            allContentfulPageBlogPost(sort: { order: DESC, fields: createdAt }) {
                nodes {
                    createdAt
                    updatedAt
                    id
                    topics
                    title
                    slug
                    copy {
                        copy
                        readingTime
                    }
                    heroImage {
                        gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    `);

    return posts.allContentfulPageBlogPost.nodes;
};
