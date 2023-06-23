import { React,useState } from "react";
import styles from "./Subscribe.module.css"



function Subscribe() {
    const [subscribe,setSubscribe]=useState(false);

    function classNames()
    {
        if (subscribe)
            return `${styles.subscription} ${styles.done}`
        else return `${styles.subscription}`
    }

 return(
    <div className={styles.container}>
    <div className={styles.content}>
    <form className={classNames()} >
      <input className={styles.add_email} type="email" placeholder="Entrez votre adresse email" required />
      <button className={styles.submit_email} type="button">
        <span className={styles.before_submit} onClick={()=>setSubscribe(true)}>S'ABONNER</span>
        <span className={styles.after_submit} >Merci pour l'Abonnement!</span>
       </button>
    </form>
  </div>
</div>
 )
}

export default Subscribe;