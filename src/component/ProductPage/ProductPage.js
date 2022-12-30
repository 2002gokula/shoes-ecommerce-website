import React, { useState } from "react"
import "./ProductPage.css"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import Star from "@mui/icons-material/Star"
import AddIcon from "@mui/icons-material/Add"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
const ProductPage = () => {
  const [count, setCount] = useState(1)
  const AddBtn = () => {
    setCount((value) => value + 1)

    console.log(count)
  }
  const RevomeBtn = () => {
    if (count <= 1) {
      console.log("gokula")
      alert("Select least one order")
    } else {
      setCount((value) => value - 1)
    }

    console.log(count)
  }
  return (
    <div className="ProductPage">
      <div className="ProductPageleftSide">
        <div className="ProductPageTitle">
          <span>Men</span>
          <ArrowForwardIosIcon />
          <span>Sneakers</span>
        </div>

        <img className="ProductImage" src="ProductImage/3(1).jpg" />
        <div className="ProductImageSiderBar">
          <img src="ProductImage/3(4).jpg" />
          <img src="ProductImage/3(6).jpg" />
        </div>
        <div className="ProductImageSiderBar">
          <img src="ProductImage/3(4).jpg" />
          <img src="ProductImage/3(6).jpg" />
        </div>
      </div>
      <div className="ProductPageRightSide">
        <div className="ProductPage__Header__title">
          <h4>Men's Sneakers</h4>
          <div style={{ color: "orange" }}>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBorderIcon />
          </div>
        </div>
        <div className="ProductTitle__Page">
          <h1>Nike's Air Max 270</h1>
          <h6>$250.76</h6>
          <p>
            They agree with realtiy to a high degree od accuracy as tested in
            experiment after experiment
          </p>
          <div className="Selction">
            <span>Select size</span>
            <p>Size guide</p>
          </div>
          <div className="SizeBox">
            <section>S</section>
            <section>M</section>
            <section>L</section>
            <section>XL</section>
            <section>XXL</section>
          </div>
          <div className="AddRemoveBtn">
            <button onClick={RevomeBtn}>-</button>
            <h4>{count}</h4>
            <button onClick={AddBtn}>+</button>
            <button>Add to Card</button>
          </div>
          <hr width="630px" style={{ marginLeft: "0px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "24px", fontWeight: "500" }}>Material</p>
            <AddIcon style={{ paddingRight: "90px" }} />
          </div>
          <hr width="630px" style={{ marginLeft: "0px" }} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
