import React, { useRef, useState } from 'react';
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const ImageSlider2 = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const posX = useRef(0);
  const long = slides.length;

  function handlePrevious(e) {
    const oldPosX = posX.current;
    posX.current = e.clientX;

    if (posX.current < oldPosX - 50) {
      nextSlide();
    } else if (posX.current > oldPosX + 50) {
      prevSlide();
    }
  }

  function prevSlide() {
    setIndex((index - 1 + long) % long);
  }

  function nextSlide() {
    setIndex((index + 1) % long);
  }

  function Slide() {
    const prevIndex = (index - 1 + long) % long;
    const nextIndex = (index + 1) % long;
    const prevPrevIndex = (index - 2 + long) % long;
    const nextNextIndex = (index + 2) % long;
  
    return (
      <div className="div-swiper-slide2">
        <div className="div-swiper-slide-photo">
          <VscChevronLeft className="left-arrow" onClick={prevSlide} />
        </div>
        <div className="div-swiper-slide-photo">
          <img src={slides[prevPrevIndex].image} alt='travel image' className='image' />
        </div>
        <div className="div-swiper-slide-photo">
          <img src={slides[prevIndex].image} alt='travel image' className='image' />
        </div>
        <div className="div-swiper-slide-photo">
          <img src={slides[index].image} alt='travel image' onDragStart={(e) => { posX.current = e.clientX; console.log(posX.current) }} onDragEnd={(e) => handlePrevious(e)} className='image' />
        </div>
        <div className="div-swiper-slide-photo">
          <img src={slides[nextIndex].image} alt='travel image' className='image' />
        </div>
        <div className="div-swiper-slide-photo">
          <VscChevronRight className="right-arrow" onClick={nextSlide} />
        </div>
      </div>
    );
  }
  

  return (
    <section className='slider'>
      {Slide()}
    </section>
  );
};

export default ImageSlider2;
