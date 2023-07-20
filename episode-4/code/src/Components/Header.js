import React, { useState } from "react";
import "../index.css";
import { LOGO_URL } from "../../utils/constants.js";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const toggleLogin = () => {
    setLoginText(loginText === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="navContainer">
        <ul className="navItemsList">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="loginBtn" onClick={toggleLogin}>
              {loginText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
