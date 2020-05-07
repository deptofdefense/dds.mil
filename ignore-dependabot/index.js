module.exports = {
  onInit: ({ utils }) => {
    if (utils.git.commits[0].author.name === "dependabot-preview[bot]") {
      utils.build.cancelBuild('Skipping dependabot commit')
    }
  },
}