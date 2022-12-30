import React from "react"
import "./Hero.css"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
const Hero = () => {
  return (
    <div className="Hero">
      <div className="HeroLeft">
        <div className="HeroTitle">
          <h1>Get your awesome sneakers.</h1>
        </div>
        <div className="Heroparag">
          <p>
            We offer the best deals in our shop. Check them out now. We have
            awesome stuff on sale for you.
          </p>
        </div>
        <div className="ShopingBtn">
          <a href="/product">
            <button>Shop Now</button>
          </a>
          <FavoriteBorderOutlinedIcon />
        </div>
        <div style={{ display: "flex", gap: "50px" }}>
          <div className="Checkbox">
            <img className="ellipse" src="images/Ellipse.png" />
            <img className="cheak" src="images/check.png" />
            <h3>Free shipping</h3>
          </div>
          <div className="Checkbox">
            <img className="ellipse" src="images/Ellipse.png" />
            <img className="cheak" src="images/check.png" />
            <h3>Free returns</h3>
          </div>
        </div>
      </div>
      <div className="HeroRight">
        <div className="Shoping__HeroDesign">
          <img src="images/Gradient.png" />
          <img src="images/Group-1.png" />
          <img src="images/Group-3.png" />
          <img
            className="Image2"
            style={{
              marginTop: "300px",
              marginLeft: "200px",
            }}
            src="images/Group8.png"
          />
          <img className="Image1" src="images/Group-5.png" />
          <img src="images/Group10.png" />
          <img
            className="Image4"
            style={{
              height: "auto",
              maxWidth: "900%",
              marginTop: "500px",
              marginLeft: "90px",
            }}
            src="images/Group-7.png"
          />
          <img src="images/point(1).png" />
          <img
            className="Image3"
            style={{ marginTop: "-90px", marginLeft: "200px" }}
            src="images/point(2).png"
          />

          <div className="BackgroupImg">
            {" "}
            <img className="HeroSho" src="images/image3.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
