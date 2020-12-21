/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    console.log(slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }


}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const res = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`)
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: `/blog${edge.node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: edge.node.fields.slug,
      }
    })
  })

};

