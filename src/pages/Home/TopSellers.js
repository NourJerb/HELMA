import React, { useState } from "react";
import styles from "./TopSellers.module.css";


import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


const TopSellers = () => {
  return (
    <div className={styles["topsellers-container"]}>
      <div className={styles["title-container-top-seller"]}>
        <h3 className={styles["title"]}>meilleures ventes</h3>
      </div>
      <div className={styles["product-card-container"]}>
      <ImageSlider slides={SliderData} />
        
      </div>
    </div>
  );
};
export default TopSellers;
