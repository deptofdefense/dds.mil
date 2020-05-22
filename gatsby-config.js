const path = require("path");
const robots = require("./config/robots");

module.exports = {
  siteMetadata: {
    siteUrl: "https://v2-master--dds-mil.netlify.app/",
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
        hooks: path.join(__dirname, "src/hooks"),
        sections: path.join(__dirname, "src/sections"),
        pages: path.join(__dirname, "src/pages"),
        layouts: path.join(__dirname, "src/layouts"),
        types: path.join(__dirname, "src/types"),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
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
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/admin/*"],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: robots,
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DDS.mil",
        short_name: `Defense Digital Service`,
        start_url: `/`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "media/logo-desktop-full.png",
        background_color: "#73b3e7",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        enableIdentityWidget: false,
        htmlTitle: "Admin | Defense Digital Service",
        modulePath: `${__dirname}/src/cms/cms.tsx`,
        manualInit: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/media`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
