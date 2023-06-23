import { React,useState } from "react";
import styles from "./Footer.module.css"



function Footer() {

    const [subscribe,setSubscribe]=useState(false);

    function button()
    {
        if (subscribe)
        return (<span className={styles.merci}>Merci pour l'Abonnement!</span>);
    else return "S'ABONNER";
    }

    function submit()
    {
        if (subscribe)
            return styles.submit;
        else return styles.form;
    }
    
 return(
    <div className={styles.container}>
    <form className={submit()} >
      <input className={styles.email} type="email" placeholder="Entrez votre adresse email" required />
      <button className={styles.submit_email} type="button" onClick={()=>setSubscribe(true)}>{button()}
       </button>
    </form>
</div>
 )
}

export default Footer;