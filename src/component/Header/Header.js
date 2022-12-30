import React from "react"
import "./Header.css"
const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <a href="/">
          <img src="images/Logo.png" />
        </a>
      </div>
      <div className="HeaderMiddle">
        <div>
          {" "}
          <h1 className="ActiveBtnH1" style={{ color: "#FF3C78" }}>
            Footwear
          </h1>
          <div className="ActiveBtn"></div>
        </div>
        <h1>About us</h1>
        <h1>Products</h1>
        <h1>Sale</h1>
      </div>
      <div className="HeaderRight">
        <img src="images/search.png" />
        <img src="images/user.png" />
        <img src="images/shopping-bag.png" />
        <img />
      </div>
    </div>
  )
}

export default Header
