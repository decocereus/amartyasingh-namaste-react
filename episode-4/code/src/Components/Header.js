import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
