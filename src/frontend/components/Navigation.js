import React from "react";
import "../styles/Navigation.css";

const Navigation = () => (
  <nav className="navigation">
    <h1>Anime Affiliate Store</h1>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#products">Produkte</a></li>
      <li><a href="#about">Über uns</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
  </nav>
);

export default Navigation;
