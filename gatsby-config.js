/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title:'MA.',
  },



  plugins: [
  "gatsby-plugin-image",
  "gatsby-plugin-sharp", 


  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
  
   
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "MA.",
          short_name: "MA.",
          start_url: "/",
          display: "standalone",
          icon: "src/images/logo.png", // This path is relative to the root of the site.
          
          crossOrigin: `use-credentials`,
        },
      },
    
 
 
],
}
