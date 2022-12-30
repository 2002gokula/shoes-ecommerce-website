import React from "react"
import "./Product.css"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
const ProductPage = () => {
  return (
    <div className="ProductPage">
      <div className="HeaderProductPage">
        <h2>Featured products</h2>
        <span>
          View all
          <NavigateNextIcon />
        </span>
      </div>

      <div className="ProductAmount">
        <div className="Product">
          <div
            style={{
              background: "linear-gradient(270deg, #fe7831 0%, #ffdebe 100%)",
            }}
            className="circleColor"
          ></div>
          <img className="ProductImage" src="images/image1.png" />
          <div className="Starreview">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
          <p className="ProductPara">
            Adidas Falcon Shoes for men - 2021 Edition
          </p>
          <h3 className="ProductRate">$320</h3>
        </div>
        <div className="Product">
          <div
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
            className="circleColor"
          ></div>
          <img className="ProductImage" src="images/image1.png" />
          <div className="Starreview">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
          <p className="ProductPara">
            Adidas Falcon Shoes for men - 2021 Edition
          </p>
          <h3 className="ProductRate">$290</h3>
        </div>
        <div className="Product">
          <div
            style={{
              background: "linear-gradient(270deg, #FF3C78 2.8%, #FFB2B2 100%)",
            }}
            className="circleColor"
          ></div>
          <img className="ProductImage" src="images/image1.png" />
          <div className="Starreview">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
          <p className="ProductPara">
            Adidas Falcon Shoes for men - 2021 Edition
          </p>
          <h3 className="ProductRate">$490</h3>
        </div>
        <div className="Product">
          <div
            style={{
              background:
                " linear-gradient(97.49deg, #8AA8F8 -0.43%, #315BFF 144.53%)",
            }}
            className="circleColor"
          ></div>
          <img className="ProductImage" src="images/image1.png" />
          <div className="Starreview">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
          <p className="ProductPara">
            Adidas Falcon Shoes for men - 2021 Edition
          </p>

          <h3 className="ProductRate">$350</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
