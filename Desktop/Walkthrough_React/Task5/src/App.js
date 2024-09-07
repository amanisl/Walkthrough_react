import logo from './logo.svg';
import './App.css';
import React from 'react';
import headphoneImage from './assets/images.jpeg';
const Product = () => {
  return (
    <div className="product">
      <img src={headphoneImage} alt="Headphones" />
      <h2>Headphones | High Base Clear Sound</h2>
      <p>The flagship-level battery life for the all new ine plus nord buds 2r deliverd upto 38hrs of non stop music on a single charge. </p>
      <p className="price">$12</p>
      <button className="buy-now">Buy Now</button>
    </div>
  );
}
export default Product;

