import React, { useRef, useState } from "react";
import "./Carousel.css";

function generateImagesArray(basePath, num) {
  const images = [];

  for (let i = 1; i < num; i++) {
    images.push({
      id: i,
      imgUrl: `${basePath}${i}.jpg`,
      title: `Imagen ${i}`,
    });
  }
  return images;
}

const images = generateImagesArray("../assets/", 5);
console.log(images);

export default function Carousel() {
  const carousel = useRef();
  const [count, setCount] = useState(0);

  const changeImage = (delta) => {
    if (carousel.current) {
      const width = carousel.current.offsetWidth;

      if (count + delta > images.length - 1) {
        setCount(0);
        carousel.current.scrollTo(0, 0);
      } else if (count + delta < 0) {
        setCount(images.length - 1);
        carousel.current.scrollTo(width * images.length - 1, 0);
      } else {
        carousel.current.scrollTo(
          carousel.current.scrollLeft + width * delta,
          0
        );
        setCount((c) => c + delta);
      }
    } else {
      return;
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-button left-button"
        onClick={() => changeImage(-1)}
      ></div>
      <div
        className="carousel-button right-button"
        onClick={() => changeImage(1)}
      ></div>
      <div className="carousel" ref={carousel}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === count ? "carousel-item active" : "carousel-item"}
          >
            <img src={img.imgUrl} alt={idx} className="carousel-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
