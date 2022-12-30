import React from "react"
import "./ShopingCard.css"
import AddIcon from "@mui/icons-material/Add"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
const ShopingCard = () => {
  return (
    <div className="ShopingCard">
      <div className="ShopingCard__Header">
        <div className="Shoping__Title">
          <h1>New arrivals</h1>
          <p>
            Enjoy the new products from our store. Select what you like, enjoy &
            return.
          </p>
        </div>
        <div className="Shoping__viewAll">
          <p>View all</p>
          <NavigateNextIcon />
        </div>
      </div>

      <div className="ProductRow">
        <div className="ProductSection">
          <h1>01</h1>
          <div className="ProductDiv1">
            <img className="CardImage" src="images/card2.png" />
          </div>
          <div className="AddBtn">
            <AddIcon />
          </div>
          <div className="ProductDetails">
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarBorderIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <p>Adidas Falcon Shoes for men - 2021 Edition</p>
            <h1>$120.50</h1>
          </div>
        </div>
        <div className="ProductSection">
          <h1>02</h1>
          <div className="ProductDiv2">
            <img className="CardImage" src="images/card2.png" />
          </div>
          <div className="AddBtn">
            <AddIcon />
          </div>
          <div className="ProductDetails">
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarBorderIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <p>Adidas Falcon Shoes for men - 2021 Edition</p>
            <h1>$120.50</h1>
          </div>
        </div>
        <div className="ProductSection">
          <h1>03</h1>
          <div className="ProductDiv3">
            <img className="CardImage" src="images/card2.png" />
          </div>
          <div className="AddBtn">
            <AddIcon />
          </div>
          <div className="ProductDetails">
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarBorderIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <p>Adidas Falcon Shoes for men - 2021 Edition</p>
            <h1>$120.50</h1>
          </div>
        </div>
        <div className="ProductSection">
          <h1>04</h1>
          <div className="ProductDiv4">
            <img className="CardImage" src="images/card2.png" />
          </div>
          <div className="AddBtn">
            <AddIcon />
          </div>
          <div className="ProductDetails">
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <StarBorderIcon style={{ color: "rgba(254, 120, 49, 1)" }} />
            <p>Adidas Falcon Shoes for men - 2021 Edition</p>
            <h1>$120.50</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopingCard
