module.exports = {
  query: `{
    contentJson {
      siteDomain
      siteTitle
    }
    allSitePage {
      nodes {
        path
      }
    }
  }`,
  resolveSiteUrl: ({ contentJson }) => {
    return `https://${contentJson.siteDomain}`;
  },
  exclude: ["/admin/*"],
};
