const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query pagesQuery {
            allContentfulAlbum {
                edges {
                    node {
                        name
                    }
                }
            }
            allContentfulBlogPost {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `);

    result.data.allContentfulAlbum.edges.forEach(({ node }) => {
        createPage({
            path: `/photography/${encodeURIComponent(node.name.toLowerCase())}`,
            component: path.resolve('src/templates/album-entry.tsx'),
            context: { name: node.name },
        });
    });

    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            path: `/blog${node.slug}`,
            component: path.resolve('src/templates/blog-post.tsx'),
            context: { title: node.title, date: new Date() },
        });
    });
};
