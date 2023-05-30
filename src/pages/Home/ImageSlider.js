import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [index, setIndex] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    if (index == 4) {
      setIndex(1);
    } else setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index == 1) {
      setIndex(4);
    } else setIndex(index - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {Slide(index, setIndex, nextSlide, prevSlide)}
    </section>
  );
};

export default ImageSlider;

function Slide(index, setIndex, nextSlide, prevSlide) {
  if (index == 4) setIndex(0);
  return (
    <div className="div-swiper-slide">
      <div className="div-swiper-slide-photo">
        <VscChevronLeft className="left-arrow" onClick={prevSlide} />
      </div>

      <div className="div-swiper-slide-photo">
        <img
          src={SliderData[index - 1].image}
          alt="travel image"
          className="image"
        />
      </div>
      <div className="div-swiper-slide-photo">
        <img
          src={SliderData[index].image}
          alt="travel image"
          className="image"
        />
      </div>
      <div className="div-swiper-slide-photo">
        <img
          src={SliderData[index + 1].image}
          alt="travel image"
          className="image"
        />
      </div>
      <div className="div-swiper-slide-photo">
        <img
          src={SliderData[index + 2].image}
          alt="travel image"
          className="image"
        />
      </div>
      <div className="div-swiper-slide-photo">
        <VscChevronRight className="right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}
