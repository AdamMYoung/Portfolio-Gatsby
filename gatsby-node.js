const readingTime = require('reading-time');
const { marked } = require('marked');

const createBlogPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        {
            allContentfulPageBlogPost {
                nodes {
                    slug
                    topics
                }
            }
        }
    `);

    data.allContentfulPageBlogPost.nodes.forEach((edge) => {
        const slug = edge.slug;
        const topics = edge.topics;

        actions.createPage({
            path: `/blog/${slug}`,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: { slug: slug, topics },
        });
    });
};

exports.createPages = async function ({ actions, graphql }) {
    await createBlogPages({ actions, graphql });
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
