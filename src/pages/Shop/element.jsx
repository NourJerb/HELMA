import React from "react"
import styles from './element.module.css';
import { useNavigate } from "react-router-dom";


function Element(props){
    let navigate=useNavigate()
    const handleCommanderClick = () => {
    navigate("/commander", { state: { product: props.e } });
  };
    return(<div className={styles.element}>
        <div className={styles.divv}>
            <img src={props.e[1]} className={styles.img} ></img>
            <div className={styles.title}>Men’s black hat Gucci</div>
            
            <div className={styles.desc}>Another masterpiece from the legendary designer. He designed new dress dev…</div>
            <div className={styles.btn}><button className={styles.boutton} onClick={handleCommanderClick}>Commander</button></div>
            <div className={styles.espace}></div>
        </div>

            
    </div>);
}

export default Element;

//<div>{props.e[0]}</div> 
//<div>{props.e[4]}</div> to import from data