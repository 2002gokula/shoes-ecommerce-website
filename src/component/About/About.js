import React from "react"
import "./About.css"
const About = () => {
  return (
    <div className="About">
      <div className="LeftSideAbout">
        <div className="VideoSection">
          <video
            src="images/shop33.mp4"
            loop
            muted
            autoPlay
            onLoad="autopplay"
            playsinline
            width="500px"
          ></video>
        </div>
      </div>
      <div className="RightsideAbout">
        <h1>Why choose our shop</h1>
        <p>
          For explosive events (sprints up to 400 metres, long jump, triple
          jump) the reduction in atmospheric pressure means there is less
          resistance from the atmosphere.
        </p>
        <div style={{ display: "flex", gap: "60px" }}>
          <div className="Features">
            <img src="https://cdn-icons-png.flaticon.com/512/2962/2962303.png" />
            <span>Fast Delivery</span>
          </div>
          <div className="Features">
            <img src="https://cdn-icons-png.flaticon.com/512/8628/8628960.png" />
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
