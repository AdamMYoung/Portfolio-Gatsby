const readingTime = require('reading-time');
const { marked } = require('marked');

/**
 * Creates blog articles for the entries sourced from contentful.
 */
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
            context: { slug, topics },
        });
    });
};

/**
 * Creates project pages for the 3D print models sourced from contentful.
 */
const createPrintPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        {
            allContentful3DPrintModel {
                nodes {
                    slug
                }
            }
        }
    `);

    data.allContentful3DPrintModel.nodes.forEach((edge) => {
        const slug = edge.slug;

        actions.createPage({
            path: `/prints/${slug}`,
            component: require.resolve(`./src/templates/print-entry.tsx`),
            context: { slug },
        });
    });
};

exports.createPages = async function ({ actions, graphql }) {
    await createBlogPages({ actions, graphql });
    await createPrintPages({ actions, graphql });
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
