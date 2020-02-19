import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      about1Img: file(relativePath: { eq: "about/about-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about2Img: file(relativePath: { eq: "about/about-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about3Img: file(relativePath: { eq: "about/about-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Me" />
      <div className="about-me-page container">
        <h1 className="about-me__main-title">About Me</h1>
        <p className="about-me__lead lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repellat adipisci in, quam corrupti ex a temporibus molestiae enim
          nemo alias iste quibusdam itaque nam inventore possimus dolor eaque
          aut, nesciunt dolorum, quae esse! Sapiente, nesciunt enim saepe,
          cupiditate eligendi voluptas amet excepturi, nihil aut libero nulla
          neque eveniet vel.
        </p>
        <Img
          className="about-me-main__img"
          fluid={data.about1Img.childImageSharp.fluid}
          alt="Coding on laptop"
        />
        <section className="about-me-passion">
          <h1 className="about-me__title">My Passion</h1>
          <p className="about-me__lead lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            repellat adipisci in, quam corrupti ex a temporibus molestiae enim
            nemo alias iste quibusdam itaque nam.
          </p>
          <Img
            className="about-me__img"
            fluid={data.about2Img.childImageSharp.fluid}
            alt="Coding on laptop"
          />
        </section>
        <section className="about-me-hobby">
          <h1 className="about-me__title">My Hobby</h1>
          <p className="about-me__lead lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            repellat adipisci in, quam corrupti ex a temporibus molestiae enim
            nemo alias iste quibusdam itaque nam.
          </p>
          <Img
            className="about-me__img"
            fluid={data.about3Img.childImageSharp.fluid}
            alt="fishing"
          />
        </section>
      </div>
    </Layout>
  )
}

export default About
