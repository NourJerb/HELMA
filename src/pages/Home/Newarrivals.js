import styles from "./Newarrivals.module.css";
import React from 'react';
import img1 from "./Assets/Product 1.jpg";
import img2 from "./Assets/Product 2.jpg";
import img3 from "./Assets/Product 3.jpg";
import img4 from "./Assets/Product 4.jpg";
import img5 from "./Assets/Product 5.jpg";
import img6 from "./Assets/Product 6.jpg";

const Newarrivals = () => {
  return (

    <div className={styles["newarrivals-container"]}>
      <div className={styles["title-container"]}>
        <h3 className={styles["title"]}>nouveautés</h3>
        </div>
        <div className={styles["home-container"]}>
          <div className={styles["grid1"]}>
          
          <img src={img1} className={styles["grid-image"]}/>
          
          
          <img src={img2} className={styles["grid-image"]}/>
        
          
          <img src={img3} className={styles["grid-image"]}/>
          </div>

      
          <div className={styles["grid2"]}>
          <img src={img4} className={styles["grid-image"]}/>
          
         
          <img src={img5} className={styles["grid-image"]}/>
        
          
          <img src={img6} className={styles["grid-image"]}/>
          </div>
        
        </div>
      

      
    </div>
    
  );
};
export default Newarrivals;
