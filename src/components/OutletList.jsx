import React, { useRef } from 'react';
import "../css/ProductList.css"; // Assuming the CSS file will handle styling

const products = [
  // Simulate the product data as an array of objects
  {
    id: 1,
    title: "Start Campaign Darwin Regenity FK Cream",
    brand: "Shinbishin",
    category: "Skincare",
    stock: 14,
    price: null, // No visible price, assuming log in is needed
    imageUrl: "../img/product/MicolRecom/p1001.jpg", // Placeholder for image URL
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: "SALE",
    imageUrl: "../img/product/MicolRecom/p1001.jpg",
    rating: 0,
    inStock: true,
  },
  // Add more products following the same structure
];

const OutletList = () => {
  const carouselRef = useRef();

  const scrollCarousel = (direction) => {
    const scrollAmount = direction === "left" ? -250 : 250; // Change this value for different slide amounts
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="product-list-container">
      <h1 className="page-heading">Outlets</h1>
      <div className="carousel-container">
        <button
          className="carousel-button left"
          onClick={() => scrollCarousel("left")}
        >
          &#10094;
        </button>
        <div className="product-carousel" ref={carouselRef}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card ${
                !product.inStock ? "out-of-stock" : ""
              }`}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-brand">{product.brand}</p>
                <p className="product-stock">
                  {product.inStock
                    ? `In stock: ${product.stock}`
                    : "Out of stock"}
                </p>
                <div className="product-footer">
                  <button
                    className={`add-to-cart-btn ${
                      !product.inStock ? "disabled" : ""
                    }`}
                  >
                    {product.inStock ? "Add to Cart" : "Out of stock"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-button right"
          onClick={() => scrollCarousel("right")}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default OutletList;
