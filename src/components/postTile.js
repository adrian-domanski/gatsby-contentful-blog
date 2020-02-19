import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostTile = ({ post, className = "" }) => {
  return (
    <div className={`${className} post-tile`}>
      <Link className="link-reset post-title__link" to={post.slug}>
        <Img
          className="post-tile__img"
          fluid={post.mainImage.fluid}
          alt={post.title}
        />
        <div className="post-tile-content">
          <h1 className="post-tile__title">{post.title}</h1>
          <p className="post-tile__description">{post.shortDescription}</p>
          <span className="post-tile__read-more text-bold">- Read More -</span>
        </div>
      </Link>
    </div>
  )
}

export default PostTile
