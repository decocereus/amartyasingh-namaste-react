import React from "react";
import "../index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJTmswUb5uIEzpJohlELVyfns0JE-VELMfhmgplglxOxTDW_1aHZxYzY67HdIUgG7Zuk&usqp=CAU"
          className="logo"
        />
      </div>
      <div className="navContainer">
        <ul className="navItemsList">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
