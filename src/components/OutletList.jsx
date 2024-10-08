import React, { useRef } from 'react';
import "../css/ProductList.css"; 

const products = [

  {
    id: 2001,
    title: "Outlet Sparkling Active Serum 65g",
    brand: "Cefine",
    category: "Serum",
    stock: 0,
    price: 300, 
    imageUrl: "../img/product/Outlets/p2001.jpg", 
    rating: 0,
    inStock: false,
  },
  {
    id: 2002,
    title: "Outlet P Face Sheet 3-piece set",
    brand: "others",
    category: "Face sheet guard",
    stock: 5,
    price: 100,
    imageUrl: "../img/product/Outlets/p2002.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2003,
    title: "Special Price Cut Cloth WC-1 White with Sleeves",
    brand: "Specials",
    category: "Cut cloth",
    stock: 5,
    price: 700,
    imageUrl: "../img/product/Outlets/p2003.jpg",
    rating: 1,
    inStock: true,
  },
  {
    id: 2004,
    title: "Special Price Hair Dye Cloth WH-1 with Black Sleeves",
    brand: "Specials",
    category: "Hair color cloth",
    stock: 0,
    price: 900,
    imageUrl: "../img/product/Outlets/p2004.jpg",
    rating: 0,
    inStock: false,
  },
  {
    id: 2005,
    title: "Special Price Black Shampoo Cloth WB-1 Black",
    brand: "Specials",
    category: "Shampoo Cloth",
    stock: 10,
    price: 900,
    imageUrl: "../img/product/Outlets/p2005.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2006,
    title: "Outlet KBS-60B Kita Dry Cut Scissors",
    brand: "Small Items",
    category: "Scissors",
    stock: 2,
    price: 550,
    imageUrl: "../img/product/Outlets/p2006.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2007,
    title: "Outlet First-6.0 Cutting Scissors",
    brand: "Small Items",
    category: "Scissors",
    stock: 2,
    price: 600,
    imageUrl: "../img/product/Outlets/p2007.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2008,
    title: "Outlet First-5.5 Cutting Scissors",
    brand: "Small Items",
    category: "Scissors",
    stock: 3,
    price: 700,
    imageUrl: "../img/product/Outlets/p2008.jpg",
    rating: 0,
    inStock: true,
  },
  {
    id: 2009,
    title: "Outlet ER-GP62-K Panasonic Linear Hair Clipper",
    brand: "Small Items",
    category: "Clippers, trimmers etc.",
    stock: 3,
    price: 2000,
    imageUrl: "../img/product/Outlets/p2009.jpg",
    rating: 0,
    inStock: true,
  },
];

const OutletList = () => {
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
