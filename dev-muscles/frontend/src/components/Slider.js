import React, { useState, useEffect } from "react";
import classes from "./Slider.module.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const renderText = (index) => {
    switch (index) {
      case 0:
        return "Free Workout Plans";
      case 1:
        return "Personal Training";
      case 2:
        return "Muscle Building";
      default:
        return "";
    }
  };

  return (
    <div className={classes["slider-container"]}>
      <div className={classes.slider}>
        <div
          className={`${classes.slide} ${classes.active}`}
          style={{
            backgroundImage: `url(${
              slideIndex === 0 ? image1 : slideIndex === 1 ? image2 : image3
            })`,
          }}
        >
          <div className={classes.overlayText}>{renderText(slideIndex)}</div>
        </div>
      </div>
      <button className={classes.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={classes.next} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
