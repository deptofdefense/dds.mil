exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
      type Icon {
        icon: File @link(by: "relativePath")
      }
      type IconSection {
        icons: [Icon]
        title: String
      }
      type HeroSection {
        img: File @link(by: "relativePath")
      }
      type ImageSection {
        image: File @link(by: "relativePath")
        altText: String
      }
      type CtaSection {
        mdDetails: MarkdownRemark @link(by: "rawMarkdownBody")
      }
      type TextSection {
        mdMain: MarkdownRemark @link(by: "rawMarkdownBody")
        mdCallout: MarkdownRemark @link(by: "rawMarkdownBody")
      }
      type PagesJson implements Node {
        heroSection: HeroSection
        textSection: TextSection
        iconSection: IconSection
        imgSection: [ImageSection]
        ctaSection: CtaSection
      }
    `,
  ];
  createTypes(typeDefs);
};

const typesToSlug = ["MarkdownRemark", "PagesJson", "ContentJson"];

exports.onCreateNode = async ({
  node,
  getNode,
  actions,
  createNodeId,
  loadNodeContent,
  createContentDigest,
}) => {
  const { createNodeField, createParentChildLink, createNode } = actions;
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
        } else if (typeof value === "object") {
          createFieldsForObject(value, `${newPath}_`);
        }
      });
    };

    const fileNode = getNode(node.parent);
    const fileName = fileNode.name;
    createFieldsForObject(node, `${fileName}_`);
  }

  if (node.internal.mediaType === "image/svg+xml") {
    //
    // Load content of svg files so they can be rendered
    // inline
    //
    const id = createNodeId(node.id);
    const rawSvg = await loadNodeContent(node);

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
