import "./LoginHeader.css";
import React from "react";
import Logo from "./Logo";

export default function LoginHeader() {
  return (
    <div className="LHCointainer">
      <Logo />
      <div className="buttons">
        <button className="btn1">Login</button>
        <button className="btn2">Signup</button>
      </div>
    </div>
  );
}
