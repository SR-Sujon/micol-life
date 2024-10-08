import React, { useRef } from 'react';
import "../css/ProductList.css"; 

const products = [
  
  {
    id: 4001,
    title: "Hita AP Straight Neutral Cosmetics 1 400g",
    brand: "Lebel",
    category: "Cosmetics",
    stock: 13,
    price: 1700, 
    imageUrl: "../img/product/NewArrivals/p4001.jpg", 
    rating: 0,
    inStock: true,
  },
  {
    id: 4002,
    title: "Hita AP Straight Acid Cosmetics 1 400g",
    brand: "Lebel",
    category: "Cosmetics",
    stock: 9,
    price: 1700, 
    imageUrl: "../img/product/NewArrivals/p4002.jpg", 
    rating: 0,
    inStock: true,
  },
  {
    id: 4003,
    title: "Hita AP Straight EX Hard 1 400g",
    brand: "Lebel",
    category: "Thio-Cis system",
    stock: 10,
    price: 1700, 
    imageUrl: "../img/product/NewArrivals/p4003.jpg", 
    rating: 0,
    inStock: true,
  },
  {
    id: 4004,
    title: "Hita REBOOTER SERUM X 400g",
    brand: "Lebel",
    category: "Perm treatment agent",
    stock: 13,
    price: 2500, 
    imageUrl: "../img/product/NewArrivals/p4004.jpg", 
    rating: 0,
    inStock: true,
  },
  
];

const NewArrivalProducts = () => {
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
      <h1 className="page-heading">New Arrivals</h1>
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

export default NewArrivalProducts;
