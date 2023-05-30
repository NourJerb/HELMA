import React, { useState } from "react";
import "./TopSellers.css";


import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


const TopSellers = () => {
  return (
    <div className="topsellers-container">
      <div className="title-container-top-seller">
        <h3 className="title">TOP SELLERS</h3>
      </div>
      <div className="product-card-container">
      <ImageSlider slides={SliderData} />
        
      </div>
    </div>
  );
};
export default TopSellers;
