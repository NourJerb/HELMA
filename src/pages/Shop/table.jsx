import React from "react"
import Element from "./element";
import styles from './table.module.css'
import Shop from './Shop'

function Table (props){
    let products=props.products;
    return(
     <div className={styles.containerrr} > 
            {products.map(product=>(
                    <div  key={product.id} className={styles.divElement} >
                        
                        <Element e={[product.id,product.image,product.name,product.description,product.category]}></Element>   
                    </div>))}
                   
    </div>);
}

export default Table;

