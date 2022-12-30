import React from "react"
import "./Brand.css"
const Brand = () => {
  return (
    <>
      <h1 className="BrandTitle">Popular brands</h1>
      <div className="Brand">
        <div className="BrandSection">
          <img src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" />
        </div>
        <div className="BrandSection">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/1200px-New_Balance_logo.svg.png" />
        </div>
        <div className="BrandSection">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Original_Adidas_logo.svg/1200px-Original_Adidas_logo.svg.png" />
        </div>
        <div className="BrandSection">
          <img src="https://5-pt-static.bata.eu/img/web/bata-logo-large.png" />
        </div>
      </div>
    </>
  )
}

export default Brand
