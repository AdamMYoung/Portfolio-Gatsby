import { graphql, useStaticQuery } from 'gatsby';
import { BlogPost } from '../../../type';

export const useBlogPosts = () => {
    const posts = useStaticQuery<{ allContentfulPageBlogPost: { nodes: BlogPost[] } }>(graphql`
        {
            allContentfulPageBlogPost {
                nodes {
                    createdAt
                    updatedAt
                    id
                    topics
                    title
                    slug
                    copy {
                        copy
                    }
                    heroImage {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    `);

    return posts.allContentfulPageBlogPost.nodes;
};
