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
        // {
        //     resolve: 'gatsby-plugin-google-analytics',
        //     options: {
        //         trackingId: '',
        //     },
        // },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
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
                        serialize: ({ query: { site, allContentfulBlogPost } }) => {
                            return allContentfulBlogPost.nodes.map((node) => {
                                return {
                                    title: node.title,
                                    description: node.summary.summary,
                                    date: node.createdAt,
                                    url: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                                    guid: site.siteMetadata.siteUrl + '/blog/' + node.slug,
                                    image: {
                                        url: node.TwoPanelImage.file.url,
                                        title: node.title,
                                        link: site.siteMetadata.siteUrl,
                                    },
                                    custom_elements: [{ 'content:encoded': marked(node.copy.copy) }],
                                };
                            });
                        },
                        query: `
                    {
                        allContentfulBlogPost {
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
                                TwoPanelImage {
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
