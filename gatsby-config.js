const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        layouts: path.join(__dirname, "src/layouts"),
      },
    },
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    "gatsby-plugin-sass",
  ],
};
