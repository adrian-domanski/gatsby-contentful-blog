import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const data = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      mainImage {
        fluid(maxWidth: 920) {
          ...GatsbyContentfulFluid
        }
      }
      createdAt
      body {
        json
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { file, title } = node.data.target.fields
        const mimeType = file["en-US"].contentType
        const [mimeGroup] = mimeType.split("/")

        switch (mimeGroup) {
          case "image":
            return (
              <img
                alt={title ? title["en-US"] : null}
                src={file["en-US"].url}
                style={{ width: "100%" }}
              />
            )
          case "application":
            return (
              <a href={file["en-US"].url}>
                {title ? title["en-US"] : file["en-US"].details.fileName}
              </a>
            )
          default:
            return (
              <span style={{ backgroundColor: "red", color: "white" }}>
                {" "}
                {mimeType} embedded asset{" "}
              </span>
            )
        }
      },
    },
  }
  return (
    <Layout>
      <SEO title={data.post.title} />
      <div className="container blog-post-details">
        <h1 className="blog-post-details__title">{data.post.title}</h1>
        <Img
          fluid={data.post.mainImage.fluid}
          alt={data.post.title}
          className="blog-post-details__img"
        />
        <section className="blog-post-details__body-context">
          {documentToReactComponents(data.post.body.json, options)}
        </section>
      </div>
    </Layout>
  )
}

export default BlogPost
