import React, { useRef, useState } from 'react';
import { SliderData1 } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [index,setIndex]=useState(1);
  const posX=useRef(0);
  const long=SliderData1.length;

  function nextIndex() {
    if (index==long-1)
      return 0;
      else return index+1;
  };

  function prevIndex() {
    if (index==-0)
      return (long-1);
    else return index-1;
  };
  function  nextSlide() {
    if (index==long-1)
    {
      setIndex(0);
    }
    else setIndex((index+1)%(long));
    console.log("prev")
  };

  function prevSlide() {
    if (index==0)
    {
      setIndex(long-1);
    }
    else  setIndex((index-1)%(long-1));
    console.log("next")
  };

  function handlePrevious(e)
{
  const oldPosX= posX.current;
  posX.current=e.clientX;
  console.log(posX.current)
  if (posX.current<oldPosX+10)
  {
    prevSlide();
  }
  else if (posX.current>oldPosX+10)
    nextSlide();
    console.log("heeey")
}

function Slide() {
  const prevIndex = (index - 1 + long) % long;
  const nextIndex = (index + 1) % long;
  const prevPrevIndex = (index - 2 + long) % long;
  const nextNextIndex = (index + 2) % long;

  return (
    <div className="div-swiper-slide">
      <div className="div-swiper-slide-photo">
        <VscChevronLeft className="left-arrow" onClick={prevSlide} />
      </div>
      <div className="div-swiper-slide-photo">
        <img src={SliderData1[prevPrevIndex].image} alt='travel image' className='image' />
      </div>
      <div className="div-swiper-slide-photo">
        <img src={SliderData1[prevIndex].image} alt='travel image' className='image' />
      </div>
      <div className="div-swiper-slide-photo">
        <img src={SliderData1[index].image} alt='travel image' onDragStart={(e) => { posX.current = e.clientX; console.log(posX.current) }} onDragEnd={(e) => handlePrevious(e)} className='image' />
      </div>
      <div className="div-swiper-slide-photo">
        <img src={SliderData1[nextIndex].image} alt='travel image' className='image' />
      </div>
      <div className="div-swiper-slide-photo">
        <VscChevronRight className="right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
    {Slide()}
    </section>
  );
};

export default ImageSlider;


