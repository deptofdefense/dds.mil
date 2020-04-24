exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
      type IconSection {
        icon: File @link(by: "relativePath")
        heading: String
      }
      type PagesJson implements Node {
        heroImg: File @link(by: "relativePath")
        iconSection: [IconSection]
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
  if (["MarkdownRemark", "PagesJson"].includes(node.internal.type)) {
    const fileNode = getNode(node.parent);
    const fileName = fileNode.name;
    createNodeField({
      node,
      name: "slug",
      value: fileName,
    });
  }

  if (node.internal.type === "PagesJson") {
    Object.entries(node)
      .filter(([key]) => key.toString().startsWith("md"))
      .forEach(([key, value]) => {
        const id = createNodeId(key);
        createNode({
          id,
          key,
          children: [],
          parent: node.id,
          internal: {
            type: "JsonMarkdownField",
            mediaType: "text/markdown",
            content: value,
            contentDigest: createContentDigest(value),
          },
        });
        createNodeField({
          node,
          name: `${key}___NODE`,
          value: id,
        });
      });
  }

  if (node.internal.mediaType === "image/svg+xml") {
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
