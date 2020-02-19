import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PostTile from "../components/postTile"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      banerImg: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faceImg: file(relativePath: { eq: "face.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentful: allContentfulBlogPost(
        sort: { fields: createdAt, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            slug
            title
            id
            shortDescription
            createdAt
            mainImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-page">
        <div className="home-baner">
          <Img
            fluid={data.banerImg.childImageSharp.fluid}
            alt="Header image with mountains"
            className="home-baner__img"
          />
        </div>
        <div className="home-page-content container">
          {/* Home welcome */}
          <section className="home-welcome">
            <h1 className="home-welcome__title">Welcome On My Blog</h1>
            <Img
              fluid={data.faceImg.childImageSharp.fluid}
              className="home-welcome__face"
            />
            <p className="home-welcom__text lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              laudantium veniam aut voluptate fugit esse quo suscipit iure.
              Laboriosam soluta magni modi repellendus corporis aliquid facilis
              mollitia velit ipsum, quas quam et aut?
            </p>
          </section>
          {/* Recent Posts */}
          <section className="recent-posts">
            <h1 className="recent-posts__title">Recent Posts</h1>
            <div className="recent-posts__grid">
              {data.contentful.edges.map(({ node: post }) => (
                <PostTile key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
