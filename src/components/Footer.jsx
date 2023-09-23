import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="container">
    <section className="links">
      <Link to={"/"}><i className="fas fa-copyright"></i> 2023 Ancient Archives</Link>
      <Link to={"/"} className="secondary-button">Contact</Link>
      <Link to={"/"} className="secondary-button" >Directions</Link>
    </section>
    <section className="social-media-icons">
      <i className="fab fa-twitter"></i>
      <i className="fab fa-facebook-square"></i>
      <i className="fab fa-linkedin"></i>
    </section>
  </footer>
    )
}

export default Footer