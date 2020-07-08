var visit = require("unist-util-visit");

module.exports = ({ markdownAST }, pluginOptions) => {
  const { relativePathPrefix } = pluginOptions;
  visit(markdownAST, "image", (node) => {
    if (!node.url.startsWith(".")) {
      node.url = `${relativePathPrefix}${node.url}`;
    }
  });
  return markdownAST;
};
