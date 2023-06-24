import React from "react";
import styles from "./Item.module.css";
import { produit } from "../../assets/file";

function Item() {
  return (
    <div className={styles["container-description"]}>
      <h1 className={styles["title-item"]}>sdgsdgsdgsdgsdgsdgsdg</h1>
      <div className={styles["presentation-description"]}>
        <div className={styles["donnees-description"]}>
          <div>
            <h4 className={styles["item-h4"]}>Poids :</h4>
            <span className={styles["item-span"]}>dsgqsfsqfsqfqs</span>
          </div>
          <div>
            <h4 className={styles["item-h4"]}>Couleur de la pierre principale:</h4>
            <span className={styles["item-span"]}>kjbkhgkg</span>
          </div>
          <div>
            <h4 className={styles["item-h4"]}>Marque :</h4>
            <span className={styles["item-span"]}>sdsdfs</span>
          </div>
          <div>
            <h4 className={styles["item-h4"]}>Forme de la pierre principale:</h4>
            <span className={styles["item-span"]}>sdfsdfsf</span>
          </div>
          <div>
            <h4 className={styles["item-h4"]}>Matière:</h4>
            <span className={styles["item-span"]}>dsfsdfsdf</span>
          </div>
          <div>
            <h4 className={styles["item-h4"]}>Type:</h4>
            <span className={styles["item-span"]}>bague</span>
          </div>
        </div>
        <div className={styles["prod"]}>
          <img className={styles["image-description"]} src={produit} alt="wait" />
          <h4 className={styles["prix-produit"]}>500<span className={styles["dt"]}>DT</span></h4>
        </div>
      </div>
      <button className={styles["button-description"]}>Commander</button>
    </div>
  );
}

export default Item;
