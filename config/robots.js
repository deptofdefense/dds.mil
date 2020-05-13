const { NODE_ENV, URL = "https://dds.mil", CONTEXT = NODE_ENV } = process.env;

module.exports = {
  resolveEnv: () => CONTEXT,
  env: {
    production: {
      policy: [{ userAgent: "*", disallow: ["/admin"] }],
      sitemap: `${URL}/sitemap.xml`,
      host: URL,
    },
    "branch-deploy": {
      policy: [{ userAgent: "*", disallow: ["*"] }],
      sitemap: null,
      host: null,
    },
    "deploy-preview": {
      policy: [{ userAgent: "*", disallow: ["*"] }],
      sitemap: null,
      host: null,
    },
  },
};
