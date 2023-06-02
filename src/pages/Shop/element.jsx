import React from "react"
import styles from './element.module.css';


function Element(props){
    return(<div className={styles.element}>
        <div className={styles.divv}>
            <div className={styles.img}></div>
            <div className={styles.title}>Men’s black hat Gucci</div>
            
            <div className={styles.desc}>Another masterpiece from the legendary designer. He designed new dress dev…</div>
            <div className={styles.btn}><button className={styles.boutton}>Commander</button></div>
            <div className={styles.espace}></div>
        </div>

            
    </div>);
}

export default Element;

//<div>{props.e[0]}</div> 
//<div>{props.e[4]}</div> to import from data