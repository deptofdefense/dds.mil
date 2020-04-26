exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
      type IconSection {
        icon: File @link(by: "relativePath")
        heading: String
      }
      type HeroSection {
        heroImg: File @link(by: "relativePath")
      }
      type PagesJson implements Node {
        iconSection: [IconSection]
        heroSection: HeroSection
        imgSection: [File] @link(by: "relativePath")
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
    //
    //  recursively create markdown nodes for any key in the json
    //  node that starts with 'md'
    //
    const createFieldsForObject = (obj, path = "") => {
      Object.entries(obj).forEach(([key, value]) => {
        const newPath = `${path}${key}`;
        if (typeof value === "string" && key.startsWith("md")) {
          const id = createNodeId(newPath);
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
            name: `${newPath}___NODE`,
            value: id,
          });
        } else if (typeof value === "object") {
          createFieldsForObject(value, `${newPath}_`);
        }
      });
    };
    createFieldsForObject(node);
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
