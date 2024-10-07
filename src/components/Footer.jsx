import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../img/micol-logo.svg";
import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h1>
            <img src={logo} alt="Logo" className="logo" />
          </h1>
          <p>
            MiCOL is Kikuya Bishodo's mail order site for beauty supplies used
            by professionals.
          </p>
          <a href="#">Learn more &rarr;</a>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">Buy & Sell</a>
            </li>
            <li>
              <a href="#">Logistics</a>
            </li>
            <li>
              <a href="#">Swift Delivery</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tag Cloud</h3>
          <div className="tags">
            <a href="#">Skincare</a>
            <a href="#">Makeup</a>
            <a href="#">Fragrance</a>
            <a href="#">Haircare</a>
            <a href="#">Beauty Tools</a>
            <a href="#">Organic</a>
            <a href="#">Vegan</a>
            <a href="#">Moisturizers</a>
            <a href="#">Lipstick</a>
            <a href="#">Face Masks</a>
            <a href="#">Serums</a>
            <a href="#">Anti-Aging</a>
            <a href="#">Eye Cream</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <div className="subscribe">
            <input type="email" placeholder="Enter email address" />
            <button type="submit">
              {/* Font Awesome arrow right icon */}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="social-icons">
            <a href="#">
              {/* Font Awesome Twitter icon */}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              {/* Font Awesome Facebook icon */}
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              {/* Font Awesome Instagram icon */}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 All rights reserved | MiCOL
        </p>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Compliances</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
