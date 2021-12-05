const readingTime = require('reading-time');
const { marked } = require('marked');

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

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createFieldExtension, createTypes } = actions;

    createFieldExtension({
        name: 'readingTime',
        extend() {
            return {
                resolve(source) {
                    return readingTime(marked(source.copy)).text;
                },
            };
        },
    });

    createTypes(`
        type contentfulPageBlogPostCopyTextNode implements Node {
            readingTime: String @readingTime   
        }
    `);
};
