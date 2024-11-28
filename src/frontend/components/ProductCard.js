import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="product-price">{price}€</p>
      <button className="product-button">Zum Produkt</button>
    </div>
  );
};

export default ProductCard;
