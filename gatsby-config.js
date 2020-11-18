require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Adam Young | Portfolio`,
    description: `Portfolio of Adam Young`,
    author: `Adam Young`,
    siteUrl: 'https://www.aydev.uk',
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-fontawesome-css',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Young | Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:400,500,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
