const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulBlogPost.edges.forEach(({ node: project }) => {
    createPage({
      path: project.slug,
      component: path.resolve(`${__dirname}/src/templates/blog-post.js`),
      context: {
        slug: project.slug,
      },
    })
  })
}
