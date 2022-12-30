import React from "react"
import "./Poster.css"
const Poster = () => {
  return (
    <div className="Poster">
      <div className="LeftSidePoster">
        <div className="PosterLeft">
          <img src="images/football.png" />
        </div>
        <div className="PosterRigth">
          <h3>Accesories</h3>
          <h1>Football</h1>
          <p>We receive new sportwear every day. Just take your pick.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="RightSidePoster">
        <div className="PosterLeft1">
          <img style={{ paddingTop: "40px" }} src="images/volley1.png" />
        </div>
        <div className="PosterRigth">
          <h3 style={{ color: "#02BE83" }}>Accesories</h3>
          <h1>Volleyball</h1>
          <p>We receive new sportwear every day. Just take your pick.</p>
          <button style={{ backgroundColor: "#02BE83" }}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Poster
