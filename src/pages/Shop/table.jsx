import React from "react"
import Element from "./element";
import styles from './table.module.css'
import Shop from './Shop'

function Table (props){
    let users=props.users;
    return(
     <div className={styles.containerrr} > 
            {users.map(user=>(
                    <div  key={user.id} className={styles.divElement} >
                        
                        <Element e={[user.id,user.first_name,user.last_name,user.email,user.gender,user.ip_address]}></Element>   
                    </div>))}
                   
    </div>);
}

export default Table;

