import React, { useState, useEffect } from "react";
import "../css/Promotions.css"; 

const Promotions = () => {
  // Example images for the slideshows
  const TileA = [
    "../img/promotion/ad1.jpg",
    "../img/promotion/ad2.jpg",
    "../img/promotion/ad3.jpg",
    
  ];

  const TileB = [
    "../img/promotion/ad4.jpg",
    "../img/promotion/ad5.jpg",
    "../img/promotion/ad6.jpg",
  ];

  const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide functionality
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(intervalId);
    }, [images.length]);

    // Handler for previous slide
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Handler for next slide
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className="slider-container">
        <button className="arrow-2 prev-arrow-2" onClick={goToPrevious}>
          &#10094;
        </button>
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out", // Add transition for smooth effect
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Promotion ${index + 1}`} />
          ))}
        </div>
        <button className="arrow-2 next-arrow-2" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    );
  };

  return (
    <div className="promotions-container">
      <div className="promo-tile">
        <h2>Hot Deals</h2>
        <h4>30% Off</h4>
        <ImageSlider images={TileA} />
        <button className="shop-now">Shop Now</button>
      </div>
      <div className="promo-tile">
        <h2>Top Collections</h2>
        <h4>September 2024</h4>
        <ImageSlider images={TileB} />
        <button className="shop-collection">Explore Collection</button>
      </div>
    </div>
  );
};

export default Promotions;