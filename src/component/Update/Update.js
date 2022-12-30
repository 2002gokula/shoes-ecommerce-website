import React from "react"
import "./Update.css"
const Update = () => {
  return (
    <div className="Update">
      <div className="rightSideUpdate">
        <h4>Subscribe now to get the latest updates</h4>
        <div className="SubBtn">
          <input placeholder="Enter you email" type="text" />
          <button>SUBSCRIBE </button>
        </div>
      </div>
      <div className="LeftSideUpdate">
        <div className="SocialMediaUpdate">
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" />
        </div>
        <div className="UpdateShoes__Image">
          <img src="images/card3.png" />
        </div>
      </div>
    </div>
  )
}

export default Update
