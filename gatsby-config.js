module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          "gatsby-remark-double-parenthesis-link",
          {
            resolve: "gatsby-remark-double-brackets-link",
            options: {
              stripBrackets: true,
              titleToURLPath: `${__dirname}/resolve-url.js`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 520,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
        mdxOtherwiseConfigured: true,
      },
    },
  ],
  siteMetadata: {
    title: `Site title`,
  },
}
