import React, { useRef } from "react";
import "../css/ProductList.css";

const products = [
  {
    id: 3001,
    title: "Hair Balm 997 70gm",
    brand: "LINC Original",
    category: "Balm",
    stock: 14,
    price: 500,
    imageUrl: "../img/product/HotSelling/p3001.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 3002,
    title: "Access Free Powder Bleach 500g",
    brand: "Napla",
    category: "Bleach",
    stock: 10,
    price: 900,
    imageUrl: "../img/product/HotSelling/p3002.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 3003,
    title: "Lash Addict Eyelash Conditioning Serum Advanced",
    brand: "BJC",
    category: "Eyelash serum",
    stock: 10,
    price: 700,
    imageUrl: "../img/product/HotSelling/p3003.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 3004,
    title: "FIOLE BL Color OX3 Pouch (Red)",
    brand: "FIOLE",
    category: "Hair color",
    stock: 10,
    price: 700,
    imageUrl: "../img/product/HotSelling/p3004.jpg",
    rating: 1,
    inStock: true,
  },
  {
    id: 3005,
    title: "Hair Oil 997 120ml",
    brand: "LINC Original",
    category: "Hair care",
    stock: 10,
    price: 900,
    imageUrl: "../img/product/HotSelling/p3005.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 3006,
    title: "FIOLE BL Color OX6 Pouch (Red)",
    brand: "FIOLE",
    category: "Hair color",
    stock: 10,
    price: 1500,
    imageUrl: "../img/product/HotSelling/p3006.jpg",
    rating: 6,
    inStock: true,
  },
  {
    id: 3007,
    title: "ONE BY KOSE Serum Sheild 40gm",
    brand: "Kose",
    category: "Cream",
    stock: 10,
    price: 1100,
    imageUrl: "../img/product/HotSelling/p3007.jpg",
    rating: 1,
    inStock: true,
  },
  {
    id: 3008,
    title: "Lash Addict Eyelash Conditioning Serum [20% off]",
    brand: "BJC",
    category: "Eyelash serum",
    stock: 7,
    price: 800,
    imageUrl: "../img/product/HotSelling/p3008.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 3009,
    title: "Arimino Bleach 120 500g",
    brand: "Arimin",
    category: "Bleach",
    stock: 10,
    price: 1500,
    imageUrl: "../img/product/HotSelling/p3009.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 3010,
    title: "Hair Balm 993 70g",
    brand: "LINC Original",
    category: "Balm",
    stock: 6,
    price: 1200,
    imageUrl: "../img/product/HotSelling/p3010.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 3011,
    title: "Silk Pro Iron Radiant 28mm Red",
    brand: "others",
    category: "Straightening Iron",
    stock: 3,
    price: 2600,
    imageUrl: "../img/product/HotSelling/p3011.jpg",
    rating: 0,
    inStock: true,
  },
];

const HotSellingProducts = () => {
  const carouselRef = useRef();

  const scrollCarousel = (direction) => {
    const scrollAmount = direction === "left" ? -250 : 250;
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="product-list-container">
      <h1 className="page-heading">Hot Selling Products</h1>
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

export default HotSellingProducts;
