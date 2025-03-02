import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `jeanchilger.github.io`,
    siteUrl: `https://jeanchilger.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        preconnect: 'https://use.typekit.net/',
        web: [{
          name: 'adobe-garamond-pro',
          file: 'https://use.typekit.net/ebr3tlq.css'
        }]
      }
    }
  ]
};

export default config;
