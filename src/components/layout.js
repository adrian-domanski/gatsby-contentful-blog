import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="my-page-grid">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="page-main-content">{children}</main>
      <footer className="footer">
        <p className="footer__copy">
          Copyright 2020 &copy; <span className="text-bold">Adison</span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
