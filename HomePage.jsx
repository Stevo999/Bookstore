import React from 'react'

const HomePage = () => {
  return (
       <div className="home-page">
        <section className="welcome-text flow-content container dark-background">
          <div className="welcome-text-back">
            <h2>Welcome to Ancient Archives! A place where we revel in the knowledge our ancients have preserved for us.<br/>
              Now available in both Paperback and Digital!</h2>        
          </div>
        </section>
        <section className="category-images container">
          <div className="category-container-text">
            <h1 style={{color:"black"}}>Best Sellers</h1>
            <button className="button">Explore All</button>
          </div>
          <div className="category-image-items">
            <div className="book-card">
              <img
                src="./images/books/American Prometheus.png"
                alt="Classics category"
                className="book-image"
              />
              <div className="book-card-text">
                <p className="book-title">American Prometheus</p>
                <p className="book-author">Marvin J. Sherwin</p>
                <p className="book-price"></p>
              
              
            </div>
            </div>
            <div className="book-card">
              <img
                src="./images/books/TheDailyStoic.png"
                alt="Classics category"
                className="book-image"
              />
              <div className="book-card-text">
                <p className="book-title">The Daily Stoic </p>
                <p className="book-author">Ryan Holiday</p>
                <p className="book-price"></p>
                
              </div>
              
            </div>
            <div className="book-card">
              <img
                className="book-image"
                src="./images/books/TheArtofWar.png"
                alt="Classics category"
              />
              <div className="book-card-text">
                <p className="book-title">The Art of War</p>
                <p className="book-author">Sun Tzu</p>
                <p className="book-price"></p>
                
              </div>
              
            </div>
            <div className="book-card">
              <img
                className="book-image"
                src="./images/books/Sapiens.png"
                alt="Classics category"
              />
              <div className="book-card-text">
                <p className="book-title">Sapiens</p>
                <p className="book-author">Yuval</p>
                <p className="book-price"></p>
              
              
            </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default HomePage