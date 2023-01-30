import React from 'react'
import logo from "./logo.png";
import './Body.css';
export default function Body() {
  return (
    <div className="Mcointainer">
      <div className="logo-img">
        <img src={logo} alt="Logo" className="img1" />
      </div>
      <div className="content-cointainer">
        <h1 className="h11">Wellcome to Splitwise!</h1>
        <p className="p1">Splitwise helps you split bill with friends.</p>

        <p className="p2">
          Click "Add an expense" above to get started, or invite some friend
          first!
        </p>
      </div>
    </div>
  )
}
