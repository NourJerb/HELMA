import React from "react";
import styles from "./Item.module.css";
import { produit } from "../../assets/file";
import { useLocation, useNavigate } from "react-router-dom";


function Item() {
  let navigate=useNavigate()
  const location = useLocation();
  const product = location.state?.product;
  localStorage.setItem("product",product[0])

  const handleCommanderClick = () => {
    navigate("/commander", { state: { product: product} });
  };
  return (
    <div className={styles["container-description"]}>
       <h1 className={styles["title-item"]}>{product[2]}</h1> 
      <div className={styles["presentation-description"]}>
        <div className={styles["donnees-description"]}>
          {/* <div>
            <h4 className={styles["item-h4"]}>Poids :</h4>
            <span className={styles["item-span"]}>dsgqsfsqfsqfqs</span>
          </div> */}
          {/* <div>
            <h4 className={styles["item-h4"]}>Couleur de la pierre principale:</h4>
            <span className={styles["item-span"]}>kjbkhgkg</span>
          </div> */}
          {/* <div>
            <h4 className={styles["item-h4"]}>Marque :</h4>
            <span className={styles["item-span"]}>sdsdfs</span>
          </div> */}
          {/* <div>
            <h4 className={styles["item-h4"]}>Forme de la pierre principale:</h4>
            <span className={styles["item-span"]}>sdfsdfsf</span>
          </div> */}
          {/* <div className={styles["title"]}>
            <h1 className={styles["title-item"]}>{product[2]}</h1>
          </div> */}
          <div>
            <h4 className={styles["item-h4"]}>Description:</h4>
            <span className={styles["item-span"]}>{product[3]}</span>
          </div>
          
          {/* <div>
            <h4 className={styles["item-h4"]}>Matière:</h4>
            <span className={styles["item-span"]}>dsfsdfsdf</span>
          </div> */}
          <div>
            <h4 className={styles["item-h4"]}>Categorie:</h4>
            <span className={styles["item-span"]}>bague</span>
          </div>
        </div>
        <div className={styles["prod"]}>
          <img className={styles["image-description"]} src={product[1]} alt="wait" />
          <h4 className={styles["prix-produit"]}>500<span className={styles["dt"]}>DT</span></h4>
        </div>
      </div>
      <div className={styles["buttons"]}>
      <button className={styles["bt"]} onClick={() => { navigate(`/shop/page${localStorage.getItem("currentPage")}`) }} >Retour</button>
      <button className={styles["button-description"]} onClick={handleCommanderClick}>Commander</button>
      </div>
    </div>
  );
}

export default Item;
