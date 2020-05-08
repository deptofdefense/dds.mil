module.exports = {
  query: `{
    contentJson {
      siteDomain
      siteTitle
    }
    site {
      siteMetadata {
        title
      }
    }
  }`,
  feeds: [
    {
      query: ` {
        allMarkdownRemark(
          filter: {fields: {slug: {ne: null}}}
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              type
              title
              date
              summary
            }
          }
        }
      }`,
      serialize: ({ query: { allMarkdownRemark, contentJson } }) => {
        const domain = contentJson.siteDomain;
        return allMarkdownRemark.nodes.map(({ frontmatter, fields }) => ({
          description: frontmatter.summary,
          date: frontmatter.date,
          title: frontmatter.title,
          url: `https://${domain}/media/${frontmatter.type}/${fields.slug}`,
          guid: `https://${domain}/media/${frontmatter.type}/${fields.slug}`,
        }));
      },
      title: "Defense Digital Service Media",
      output: "/rss.xml",
    },
  ],
};
