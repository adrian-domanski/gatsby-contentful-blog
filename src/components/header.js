import React, { useState, createRef, useEffect } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const navListEl = createRef(null)

  useEffect(() => {
    document.body.addEventListener("click", handleMobileClose)
    return () => {
      document.body.removeEventListener("click", handleMobileClose)
    }
  }, [mobile])

  const handleMobileClose = () => {
    if (mobile) setMobile(false)
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/" className="link-reset">
            <h1 className="nav__logo-title">Blog</h1>
          </Link>
        </div>
        <div className="nav__toggler" onClick={() => setMobile(!mobile)}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav__list ${mobile ? "active" : ""}`} ref={navListEl}>
          <li className="nav__item">
            <Link
              className="nav__item-link"
              activeClassName="nav-link__active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__item-link"
              activeClassName="nav-link__active"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__item-link"
              activeClassName="nav-link__active"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
