import "./App.css"
import About from "./component/About/About"
import Brand from "./component/Brand/Brand"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Hero from "./component/Hero/Hero"
import Poster from "./component/Poster/Poster"
import Product from "./component/Product/Product"
import ProductPreview from "./component/ProductPreview/ProductPreview"
import ShopingCard from "./component/ShopingCard/ShopingCard"
import Update from "./component/Update/Update"
import ProductPage from "./component/ProductPage/ProductPage"
import { Routes, Route } from "react-router-dom"
import ProductPagePost from "./component/ProductPagePost/ProductPagePost"
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Product />
                <Poster />
                <ProductPreview />
                <ShopingCard />
                <About />
                <Brand />
                <Update />
                <Footer />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <Header />
                <ProductPage />
                <ShopingCard />
                <ProductPagePost />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
