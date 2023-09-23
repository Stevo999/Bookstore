import React from 'react'
import { Link } from 'react-router-dom'

const CategoryPage = () => {
  return (
    <div className="category-page">
    <nav className="category-nav">
      <ul className="category-buttons">
        <li className="button selected-category-button">History</li>
        <li>
          <Link to={"/category"} className="button unselected-category-button" >Fantasy</Link>
        </li>
        <li>
          <Link to={"/category"}  className="button unselected-category-button" >Mystery</Link>
        </li>
        <li>
          <Link to={"/category"} className="button unselected-category-button"  >Fiction</Link>
        </li>
      </ul>
    </nav>
    <section className="category-books container">
      {/* <!-- <div className="category-container-text">
        <h1 style="color: black">Best Sellers</h1>
        <button className="button">Explore All</button>
      </div> --> */}
      <div className="category-image-items">
        <div className="book-card-wrapper">
          <div className="book-card">
            <img
              src="/images/books/American Prometheus.png"
              alt="Classics category"
              className="book-image"
            />
            <div className="book-card-text">
              <p className="book-title">American Prometheus</p>
              <p className="book-author">Martin J Sherwin</p>
              <p className="book-price">$10.00</p>

              <button className="button add-to-cart">
                <i className="fas fa-cart-plus"></i>
                <span style={{padding:"10px",fontSize:"18px"}}>Add to Cart</span >
              </button>
            </div>
          </div>
        </div>
        <div className="book-card-wrapper">
          <div className="book-card">
            <img
              src="/images/books/TheArtofWar.png"
              alt="Classics category"
              className="book-image"
            />
            <div className="book-card-text">
              <p className="book-title">The Art of War</p>
              <p className="book-author">Sun Tzu</p>
              <p className="book-price">$7.00</p>

              <button className="button add-to-cart">
                <i className="fas fa-cart-plus"></i>
                <span style={{padding:"10px",fontSize:"18px"}}>Add to Cart</span >
              </button>
            </div>
          </div>
        </div>
        <div className="book-card-wrapper">
          <div className="book-card">
            <img
              className="book-image"
              src="/images/books/TheDailyStoic.png"
              alt="Classics category"
            />
            <div className="book-card-text">
              <p className="book-title">The Daily Stoic</p>
              <p className="book-author">Ryan Holiday</p>
              <p className="book-price">$7.00</p>

              <button className="button add-to-cart">
                <i className="fas fa-cart-plus"></i>
                <span style={{padding:"10px",fontSize:"18px"}}>Add to Cart</span >
              </button>
            </div>
          </div>
        </div>
        <div className="book-card-wrapper">
          <div className="book-card">
            <img
              className="book-image"
              src="/images/books/Sapiens.png"
              alt="Classics category"
            />
            <div className="book-card-text">
              <p className="book-title">Sapiens</p>
              <p className="book-author">Yuval Noah Harari</p>
              <p className="book-price">$7.00</p>

              <button className="button add-to-cart">
                <i className="fas fa-cart-plus"></i>
                <span style={{padding:"10px",fontSize:"18px"}}>Add to Cart</span >
              </button>
            </div>
          </div>
        </div>
        <div className="book-card-wrapper">
          <div className="book-card">
            <img
              className="book-image"
              src="/images/books/OurHistory.png"
              alt="Classics category"
            />
            <div className="book-card-text">
              <p className="book-title">Our History</p>
              <p className="book-author">Herodotus</p>
              <p className="book-price">$7.00</p>

              <button className="button add-to-cart">
                <i className="fas fa-cart-plus"></i>
                <span style={{padding:"10px",fontSize:"18px"}}>Add to Cart</span >
              </button>
            </div>
          </div>
        </div>
        <div className="book-card-wrapper">
          <div className="book-card">
            <img
              src="/images/books/Unbroken.png"
              alt="Classics category"
              className="book-image"
            />
            <div className="book-card-text">
              <p className="book-title">Unbroken</p>
              <p className="book-author">Laura Hillenbrand</p>
              <p className="book-price">$7.00</p>

              <button className="button add-to-cart">
                <i className="fas fa-cart-plus"></i >
                <span style={{padding:"10px",fontSize:"18px"}}>Add to Cart</span >
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
     </div>      
    
    )
}

export default CategoryPage