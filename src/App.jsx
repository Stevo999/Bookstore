import "./assets/css/app.css"
import "./assets/css/global.css"
import "./assets/css/app-header.css"
import "./assets/css/header-dropdown.css"
import "./assets/css/home.css"
import "./assets/css/category.css"
import "./assets/css/category-book-list.css"
import "./assets/css/app-footer.css"

import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './../HomePage';
import Footer from "./components/Footer"
import CategoryPage from './../CategoryPage';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/category/:categoryName" element={<CategoryPage/>}/>
      </Routes>
      <Footer/>
    </Router>   
    </>
  )
}

export default App
