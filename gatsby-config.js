const { marked } = require('marked');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.aydev.uk',
        title: 'AYDev',
        description: 'AYDev - Web development, programming and other interesting topics.',
    },
    plugins: [
        '@chakra-ui/gatsby-plugin',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                host: process.env.CONTENTFUL_HOST,
            },
        },

        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GA_TRACKING_ID,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-advanced-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'GitHub',
                fieldName: 'github',
                url: 'https://api.github.com/graphql',
                headers: {
                    Authorization: `Bearer ` + process.env.GITHUB_ACCESS_TOKEN,
                },
            },
        },
        {
            resolve: '@sentry/gatsby',
            options: {
                dsn: process.env.SENTRY_DSN,
                sampleRate: 0.8,
                tracesSampleRate: 0.3,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allContentfulPageBlogPost } }) => {
                            return allContentfulPageBlogPost.nodes.map((node) => {
                                return {
                                    title: node.title,
                                    description: node.summary.summary,
                                    date: node.createdAt,
                                    url: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                                    guid: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                                    image: {
                                        url: node.heroImage.file.url,
                                        title: node.title,
                                        link: site.siteMetadata.siteUrl,
                                    },
                                    custom_elements: [{ 'content:encoded': marked(node.copy.copy) }],
                                };
                            });
                        },
                        query: `
                    {
                        allContentfulPageBlogPost {
                            nodes {
                                createdAt
                                updatedAt
                                id
                                topics
                                title
                                summary {
                                    summary
                                }
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
                  `,
                        output: '/rss.xml',
                        title: 'The AYDev Blog',
                    },
                ],
            },
        },
    ],
};
