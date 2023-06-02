import styles from "./Newarrivals.module.css";
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
        <h3 className={styles["title"]}>New arrivals</h3>
      </div>

      <div className={styles["Product-container2"]}>
        <div className={styles["div-photo-conatiner-arrival"]}>
          <img src={img1} className={styles["image2"]} />
        </div>
        <div className={styles["div-photo-conatiner-arrival"]}>
          <img src={img2} className={styles["image1"]} />
        </div>
        <div className={styles["div-photo-conatiner-arrival"]}>
          <img src={img1} className={styles["image1"]} />
        </div>
      </div>
      <div className={styles["Product-container2"]}>
        <div className={styles["div-photo-conatiner-arrival"]}>
          <img src={img1} className={styles["image1"]} />
        </div>
        <div className={styles["div-photo-conatiner-arrival"]}>
          <img src={img2} className={styles["image1"]} />
        </div>
        <div className={styles["div-photo-conatiner-arrival"]}>
          <img src={img3} className={styles["image2"]} />
        </div>
      </div>
    </div>
    
  );
};
export default Newarrivals;
