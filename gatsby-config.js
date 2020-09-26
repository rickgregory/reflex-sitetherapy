require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "Sitetherapy",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://beta.sitetherapy.net",
  },
  plugins: [
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
