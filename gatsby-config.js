require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "Sitetherapy",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",

    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
  ],
};
