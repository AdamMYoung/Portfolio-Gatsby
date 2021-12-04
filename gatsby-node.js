exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        {
            allContentfulPageBlogPost {
                nodes {
                    slug
                }
            }
        }
    `);

    data.allContentfulPageBlogPost.nodes.forEach((edge) => {
        const slug = edge.slug;

        actions.createPage({
            path: `/blog/${slug}`,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: { slug: slug },
        });
    });
};
