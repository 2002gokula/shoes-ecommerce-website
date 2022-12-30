import React from "react"
import "./ProductPreview.css"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import Star from "@mui/icons-material/Star"
function ProductPreview() {
  return (
    <>
      <h1 className="ProductPreviewTitle">Best seller this week</h1>
      <div className="ProductPreview">
        <div className="LeftSideProduct">
          <img className="ProductImagePreview" src="images/image99.png" />
          <div className="ProductGBDesign"></div>
        </div>
        <div className="rightsideProduct">
          <Star style={{ color: "#FE7831" }} />
          <Star style={{ color: "#FE7831" }} />
          <Star style={{ color: "#FE7831" }} />
          <Star style={{ color: "#FE7831" }} />
          <Star style={{ color: "#FE7831" }} />
          <p>Adidas Falcon Shoes for women - 2023 Edition</p>
          <span>$120.50</span>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPreview
