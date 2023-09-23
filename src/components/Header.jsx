import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const naigate=useNavigate();
  const handleSearch=(e)=>{
    e.stopPropagation(); 
    e.preventDefault();
    naigate("/category")
  }
  return (
    <>
     <header className="header-container">
        <Link className="link-logo" to={"/"}>
          <section className="bookstore-logo">
            <h1 className="text-logo">Ancient Archives</h1>
          </section>
        </Link>
        <section className="header-dropdown-and-cart">
          <div className="header-dropdown">
            <button className="button secondary-button">Categories</button>
            <ul>
              <li><Link to="/category/classics">classics</Link></li>
              <li><Link to="/category/Fantasy">Fantasy</Link></li>
              <li><Link to="/category/Mystery">Mystery</Link></li>
              <li><Link to="/category/Romance">Romance</Link></li>
            </ul>
          </div>
        </section>

        <section className="search-bar">
          <form >
            <input type="text" className="search-bar-box" />
            <button type="submit" className="button search-button" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </section>
        <section>
          <button className="button secondary-button">Login</button>
          <button className="button secondary-button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-item-count">2</span>Cart
          </button>
        </section>
      </header>
    </>
  )
}

export default Header