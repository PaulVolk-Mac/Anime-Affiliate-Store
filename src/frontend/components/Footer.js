import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo und Navigation */}
        <div className="footer-top">
          <div className="footer-logo">
            <h1>Anime Affiliate Store</h1>
          </div>
          <div className="footer-links">
            <a href="/home">Home</a>
            <a href="/products">Products</a>
            <a href="/about-us">About Us</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="footer-middle">
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <div className="footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright & Rechtliches */}
        <div className="footer-bottom">
          <p>
            © 2024 Anime Affiliate Store. All Rights Reserved. |{" "}
            <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
