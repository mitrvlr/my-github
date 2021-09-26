module.exports = {
  siteMetadata: {
    title: `DDD`,
    description: `daily dev diary`,
    author: `@mitrvlr`,
    comment: {
      utterances: 'mitrvlr/commnet',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: 17841448486442296,
        access_token: "IGQVJVY0JHLTVBcDF1Skx3cG1VZA2c2MmlqeUFTWVhjV3NJQUdQaENKbzhUaEpaNmZAFeWsxZATdxQWJ1ekhVS1AyZAFBsX1JTMHB1MGgwclNLVWt3cW1nMFhzb2V6TEpNWTk4N3lzTEJ3",
        instagram_id: "mitrvlr",
        paginate: 100,
        maxPosts: 1000,
        hashtags: true
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJVY0JHLTVBcDF1Skx3cG1VZA2c2MmlqeUFTWVhjV3NJQUdQaENKbzhUaEpaNmZAFeWsxZATdxQWJ1ekhVS1AyZAFBsX1JTMHB1MGgwclNLVWt3cW1nMFhzb2V6TEpNWTk4N3lzTEJ3"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-images`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-slug-field`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-153425658-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
};
