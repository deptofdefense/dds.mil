const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Defense Digital Service`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        sections: path.join(__dirname, "src/sections"),
        pages: path.join(__dirname, "src/pages"),
        layouts: path.join(__dirname, "src/layouts"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `settings`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/content/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/content/news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `announcements`,
        path: `${__dirname}/content/announcements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/media`,
      },
    },
    {
      resolve: "gatsby-source-lever",
      options: {
        site: "leverdemo",
        verboseOutput: true,
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DDS.mil",
        short_name: `Defense Digital Service`,
        start_url: `/`,
        theme_color: `#a2466c`,
        display: `browser`,
        icon: "content/media/logo-desktop-full.png",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        enableIdentityWidget: false,
        htmlTitle: "DDS.mil Content Manager",
        modulePath: `${__dirname}/src/cms/cms.tsx`,
      },
    },
  ],
};
