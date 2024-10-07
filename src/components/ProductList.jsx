import React, { useRef } from 'react';
import "../css/ProductList.css"; // Assuming the CSS file will handle styling

const products = [
  // Simulate the product data as an array of objects
  {
    id: 1001,
    title: "Start Campaign Darwin Regenity FK Cream",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 14,
    price: 300, // No visible price, assuming log in is needed
    imageUrl: "../img/product/MicolRecom/p1001.jpg", // Placeholder for image URL
    rating: 0,
    inStock: true,
  },
  {
    id: 1002,
    title: "Start Campaign Darwin Regenity FK Charge",
    brand: "Shinbishin",
    category: "Skin Care",
    stock: 10,
    price: 350,
    imageUrl: "../img/product/MicolRecom/p1002.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 1003,
    title: "Spleenage Shampoo Moist Veil 1000ml",
    brand: "Arimin",
    category: "Scalp Care",
    stock: 10,
    price: 400,
    imageUrl: "../img/product/MicolRecom/p1003.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 1004,
    title: "Spleenage Shampoo Moist Veil 1000gm",
    brand: "Arimin",
    category: "Treatment",
    stock: 13,
    price: 600,
    imageUrl: "../img/product/MicolRecom/p1004.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 1005,
    title: "ACID Chelating Shampoo",
    brand: "Pearl Chemical",
    category: "Pre-shampoo",
    stock: 0,
    price: 900,
    imageUrl: "../img/product/MicolRecom/p1005.jpg",
    rating: 0,
    inStock: false,
  },
  {
    id: 1006,
    title: "ACID Booster 500ml",
    brand: "Pearl Chemical",
    category: "Hair Color Treatment Agent",
    stock: 0,
    price: 1100,
    imageUrl: "../img/product/MicolRecom/p1006.jpg",
    rating: 0,
    inStock: false,
  },
  {
    id: 1007,
    title: "Kenart Treatment Cream 60g",
    brand: "Sunny Place",
    category: "Cream",
    stock: 0,
    price: 1500,
    imageUrl: "../img/product/MicolRecom/p1007.jpg",
    rating: 3,
    inStock: false,
  },
  {
    id: 1008,
    title: "Alanas 5-ALA Beauty Multicare 60 tablets",
    brand: "Milbon",
    category: "Food",
    stock: 15,
    price: 700,
    imageUrl: "../img/product/MicolRecom/p1008.jpg",
    rating: 2,
    inStock: true,
  },
  {
    id: 1009,
    title: "Healthy Acacia Honey 500g",
    brand: "My Honey",
    category: "Food",
    stock: 14,
    price: 1800,
    imageUrl: "../img/product/MicolRecom/p1009.jpg",
    rating: 3,
    inStock: true,
  },
  {
    id: 1010,
    title: "Elixier Rich Oil 50ml",
    brand: "TIMe",
    category: "Oil",
    stock: 9,
    price: 900,
    imageUrl: "../img/product/MicolRecom/p1010.jpg",
    rating: 4,
    inStock: true,
  },
  {
    id: 1011,
    title: "Lulique Nano Sparkling Mist",
    brand: "Vileway",
    category: "Mist lotion",
    stock: 14,
    price: 1100,
    imageUrl: "../img/product/MicolRecom/p1011.jpg",
    rating: 1,
    inStock: true,
  },
  {
    id: 1012,
    title: "Zogan Kinscalp",
    brand: "Vileway",
    category: "Facial beauty device",
    stock: 10,
    price: 2500,
    imageUrl: "../img/product/MicolRecom/p1012.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 1013,
    title: "Dyson Airstrait Ceramic Pink",
    brand: "Dyson",
    category: "Straightening Iron Clip",
    stock: 13,
    price: 3500,
    imageUrl: "../img/product/MicolRecom/p1013.jpg",
    rating: 7,
    inStock: true,
  },
  {
    id: 1014,
    title: "Qualcia Color Shampoo Purple 250ml",
    brand: "FIOLE",
    category: "Hair Care",
    stock: 15,
    price: 850,
    imageUrl: "../img/product/MicolRecom/p1014.jpg",
    rating: 1,
    inStock: true,
  },
  {
    id: 1015,
    title: "Qualcia Color Shampoo Purple 1000ml",
    brand: "FIOLE",
    category: "Shampoo for colored hair",
    stock: 13,
    price: 2800,
    imageUrl: "../img/product/MicolRecom/p1015.jpg",
    rating: 3,
    inStock: true,
  },
  {
    id: 1016,
    title: "F Protect Admore Special Care Set",
    brand: "FIOLE",
    category: "For damaged hair",
    stock: 12,
    price: 1500,
    imageUrl: "../img/product/MicolRecom/p1016.jpg",
    rating: 3,
    inStock: true,
  },
  // Add more products
];

const ProductList = () => {
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
      <h1 className="page-heading">MiCOL Recommendations</h1>
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

export default ProductList;
