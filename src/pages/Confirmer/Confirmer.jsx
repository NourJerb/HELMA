import React from "react";
import styles from "./Confirmer.module.css";
import image3 from "../../assets/image3.png"

function Confirmer() {

  return <div className={styles.big} style={{border:"solid",width:"80%",marginLeft:"10%",alignSelf: "center",marginTop:"2.8%",marginBottom:"2.8%",borderRadius:"3vh",border:"1px solid #707070"}}>
    <div  className={styles.ct}>
      <div className={styles.imagecontainer}>
    <img className={styles.image} src={image3}/>
    </div>
    <div className={styles.paragraph}>
    <p className={styles.first_paragraph}> Votre lettre est reçue avec succés</p>
    <p className={styles.second_paragraph}> Notre manager vous contactera dans les plus brefs délais</p>
    <input type="button" value="Retourner" className={styles.buuton}></input>
    </div>
    
    </div>
     
  </div>;
}

export default Confirmer;
