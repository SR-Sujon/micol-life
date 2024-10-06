import React from "react";
import "../css/Navbar.css";
import logo from "../img/micol-logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>
          <img src={logo} alt="Logo" className="logo" />
        </h1>
      </div>

      {/* Dropdown for Product Types */}
      <div className="product-dropdown">
        <select className="product-select">
          <option value="" disabled selected>
            Product Types
          </option>
          <option value="skincare">Skincare</option>
          <option value="makeup">Makeup</option>
          <option value="haircare">Haircare</option>
          <option value="fragrance">Fragrance</option>
        </select>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="auth-links">
        <a href="#signup" className="signup">
          Login / Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
