module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        siteUrl: 'https://www.aydev.uk',
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'YA6xOU6T2wNiOzPnjVu9JKT9LBdkJ7JoK6w1DsmK8ts',
                spaceId: '6x69711h0cvt',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-140587584-1',
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `aydev`,
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-preload-fonts',
        'gatsby-transformer-sharp',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
