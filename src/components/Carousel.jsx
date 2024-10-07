import React, { useState, useEffect } from 'react';
import '../css/Carousel.css'; 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeAutoNext = 7000;

  const items = [
    {
      img: '../img/carousel/slider3.png',
      author: 'SKIN CARE',
      title: 'RADIANT SKIN',
      topic: 'CONFIDENT YOU',
      description:
        '',
    },
    {
      img: '../img/carousel/slider2.png',
      author: 'NATURAL',
      title: 'GLOW FROM WITHIN',
      topic: 'SHINE OUTSIDE',
      description:
        '',
    },
    {
      img: '../img/carousel/Hair1.png',
      author: 'HAIR CARE',
      title: 'STRONG & SILKY HAIR',
      topic: 'WITH PROPER CARE',
      description:
        '',
    },
    {
      img: '../img/carousel/slider5.jpeg',
      author: 'GLOW',
      title: 'LOOK MORE BEAUTIFUL',
      topic: 'THAN EVER BEFORE',
      description:
        '',
    },
  ];

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const autoSlide = setTimeout(showNext, timeAutoNext);
    return () => clearTimeout(autoSlide);
  }, [currentIndex]);


  return (
    <div className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.img} alt={`Slide ${index}`} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="buttons">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={item.img} alt={`Thumbnail ${index}`} />
            <div className="content">
              <div className="title"></div>
              <div className="description"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <button id="prev" onClick={showPrev}>
          &lt;
        </button>
        <button id="next" onClick={showNext}>
          &gt;
        </button>
      </div>

      {/* Time Running Indicator */}
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
