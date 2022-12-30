import React from "react"
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="left1">
          <img src="images/Logo.png" />
          <p style={{ marginTop: "40px" }}>
            Our shop is the best choice for buying footwear.
          </p>
          <div style={{ display: "flex", gap: "30px", marginTop: "70px" }}>
            <div className="SocialMediaIcon">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" />
            </div>
            <div className="SocialMediaIcon">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" />
            </div>
            <div className="SocialMediaIcon">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
            </div>
          </div>
        </div>
        <div className="left2">
          <h1 className="Headertiitle">Home</h1>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>Copyright</p>
          <p>Popular Campaign</p>
        </div>
        <div className="Right1">
          <h1 className="Headertiitle">Home</h1>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>Copyright</p>
          <p>Popular Campaign</p>
        </div>
        <div className="right2">
          {" "}
          <h1 className="Headertiitle"> Home</h1>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>Copyright</p>
          <p>Popular Campaign</p>
        </div>
      </div>
      <h2 className="FooterEndCopyRight">
        © 2023 Shop. Made with love for Brightscout{" "}
      </h2>
    </>
  )
}

export default Footer
