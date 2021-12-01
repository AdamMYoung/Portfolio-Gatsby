import { graphql, useStaticQuery } from 'gatsby';
import { BlogPost } from '../../../type';

export const useBlogPosts = () => {
    const posts = useStaticQuery<{ allContentfulBlogPost: { nodes: BlogPost[] } }>(graphql`
        {
            allContentfulBlogPost {
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
                        file {
                            url
                        }
                    }
                }
            }
        }
    `);

    return posts.allContentfulBlogPost.nodes;
};
