import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  const handleSubmit = e => e.preventDefault()
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact-page container">
        <section className="contact-me-section">
          <h1 className="contact-page__title contact-me-section__title">
            Contact Me
          </h1>
          <div className="contact-me-grid">
            <div className="contact-item">
              <i className="fas fa-phone-alt contact-item__icon"></i>
              <p className="lead contact-item__text">600-200-200</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-item__icon"></i>
              <p className="lead contact-item__text">
                Wide Street 20,
                <br />
                54-543 London
              </p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-item__icon"></i>
              <p className="lead contact-item__text">example@gmail.com</p>
            </div>
          </div>
        </section>
        <section className="contact-form-section">
          <h1 className="contact-page__title contact-form-section__title">
            Send Email
          </h1>
          <form
            action="submit"
            className="contact-page-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Email..."
              className="input-text contact-form-page__email"
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="input-textarea contact-form-page__input-message"
            ></textarea>
            <button
              type="submit"
              className="btn btn--submit contact-form-page__submit"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default Contact
