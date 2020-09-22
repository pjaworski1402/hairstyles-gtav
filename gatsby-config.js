module.exports = {
  siteMetadata: {
    siteUrl: "https://hairstyles-gta5.com/",
    title: `Hairstyles GTA V - buy hairstyles for your GTA5 character`,
    description: `Hairstyle GTA 5 for you. You can create custom hairstyles. GTA 5 custom clothes. Special items for GTA V.`,
    author: `Piotr Jaworski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-cname",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-build-date`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://hairstyles-gtav.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`category`, `offer`, `tag`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://hairstyles-gta5.com/",
        sitemap: "https://hairstyles-gta5.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Offside`, `Open Sans\:300,400,700`, `Roboto\:100,300`],
        display: "swap",
      },
    },
  ],
}
