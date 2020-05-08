const path = require("path");
const webpack = require(`webpack`);
const SVGO = require("svgo");

const svgo = new SVGO();

// https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/#disable-widget-on-site
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^netlify-identity-widget$/,
      }),
    ],
  });
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
      type UserLink {
        text: String
        link: String
      }

      type Navigation {
        title: String
        metaDescription: String
        navOrder: Int
        text: String
        link: String
        subnav: [UserLink]
      }

      type SideNav {
        includeSidenav: Boolean
        wrapSectionFirst: Int
        wrapSectionLast: Int
        menu: [UserLink]
        includeSocial: Boolean
      }

      type IconElement {
        icon: File @link(by: "relativePath")
        title: String
        cta: String
        ctaLink: String
        details: String
      }

      type ImageElement {
        image: File @link(by: "relativePath")
        altText: String
      }

      type CategoryElement {
        title: String
        details: String
        cta: String
        ctaLink: String
      }

      type Section {
        type: String!
        mdMain: MarkdownRemark @link(by: "rawMarkdownBody")
        mdCallout: MarkdownRemark @link(by: "rawMarkdownBody")
        heroImage: File @link(by: "relativePath")
        
        image: File @link(by: "relativePath")
        icons: [IconElement]
        categories: [CategoryElement]
        images: [ImageElement]

        altText: String
        title: String
        cta: String
        ctaLink: String

        numberTitles: Boolean
      }

      type PagesJson implements Node {
        navigation: Navigation
        sidenav: SideNav
        sections: [Section]
      }

      type Frontmatter {
        image: File @link(by: "relativePath")
      }
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter!
      }

      type ContentJson implements Node {
        defaultMediaImage: File @link(by: "relativePath")
      }
    `,
  ];
  createTypes(typeDefs);
};

exports.onCreateNode = async ({
  node,
  getNode,
  actions,
  createNodeId,
  loadNodeContent,
  createContentDigest,
}) => {
  const { createNodeField, createParentChildLink, createNode } = actions;
  const typesToSlug = ["MarkdownRemark", "PagesJson", "ContentJson"];
  if (typesToSlug.includes(node.internal.type)) {
    const fileNode = getNode(node.parent);
    const fileName = fileNode.name;
    createNodeField({
      node,
      name: "slug",
      value: fileName,
    });
  }

  if (node.internal.type === "PagesJson") {
    //
    //  recursively create markdown nodes for any key in the json
    //  node that starts with 'md'
    //
    const createFieldsForObject = (obj, path) => {
      Object.entries(obj).forEach(([key, value]) => {
        const newPath = `${path}${key}`;
        if (typeof value === "string" && key.startsWith("md")) {
          const id = createNodeId(newPath);
          const mdNode = {
            id,
            key,
            children: [],
            parent: node.id,
            internal: {
              type: `JsonMarkdownField`,
              mediaType: "text/markdown",
              content: value,
              contentDigest: createContentDigest(value),
            },
          };
          createNode(mdNode);
          createParentChildLink({ parent: node, child: mdNode });
        } else if (value && typeof value === "object") {
          createFieldsForObject(value, `${newPath}_`);
        }
      });
    };
    createFieldsForObject(node, `${node.id}_`);
  }

  if (node.internal.mediaType === "image/svg+xml") {
    //
    // Load content of svg files so they can be rendered
    // inline
    //

    const id = createNodeId(node.id);
    const fileContent = await loadNodeContent(node);
    const { data: rawSvg } = await svgo.optimize(fileContent);
    const svgNode = {
      id,
      children: [],
      rawSvg,
      parent: node.id,
      internal: {
        type: "InlineSvg",
        contentDigest: createContentDigest(rawSvg),
      },
    };
    createNode(svgNode);
    createParentChildLink({ parent: node, child: svgNode });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  //
  //  STATIC PAGES
  //
  const pagesResult = await graphql(`
    {
      allPagesJson {
        nodes {
          navigation {
            link
          }
        }
      }
    }
  `);

  const staticPageTemplate = path.resolve("src/templates/static-page.tsx");
  const pages = pagesResult.data.allPagesJson.nodes;
  for (let i = 0; i < pages.length; i++) {
    createPage({
      path: pages[i].navigation.link,
      component: staticPageTemplate,
      context: {
        link: pages[i].navigation.link,
      },
    });
  }

  const mediaTypes = ["announcements", "news", "blog"];
  const mediaListPage = path.resolve("src/templates/media-list.tsx");
  const mediaPage = path.resolve("src/templates/media-page.tsx");
  const pageSize = 8;

  for (let mediaType of mediaTypes) {
    const { data } = await graphql(`{
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "${mediaType}" }}}
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }`);
    const results = data.allMarkdownRemark.nodes;
    const numPages = Math.ceil(results.length, pageSize);

    // create list pages for this media type
    for (let i = 0; i < numPages; i++) {
      createPage({
        path: i === 0 ? `/media/${mediaType}` : `/media/${mediaType}/${i + 1}`,
        component: mediaListPage,
        context: {
          limit: pageSize,
          skip: i * pageSize,
          mediaType,
          numPages,
          currentPage: i + 1,
        },
      });
    }

    // create individual pages for each of the items of this media type
    for (let i = 0; i < results.length; i++) {
      createPage({
        path: `/media/${mediaType}/${results[i].fields.slug}`,
        component: mediaPage,
        context: {
          slug: results[i].fields.slug,
          mediaType,
        },
      });
    }
  }
};
