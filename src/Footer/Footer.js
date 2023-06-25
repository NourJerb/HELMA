import { React,useState } from "react";
import styles from "./Footer.module.css"



function Footer() {
    const [error,setError]=useState(false);
    const [value,setValue]=useState("");
    const [subscribe,setSubscribe]=useState(false);

    function button()
    {
        if (subscribe)
        return (<span className={styles.merci}>Merci pour l'Abonnement!</span>);
    else return "S'ABONNER";
    }

    function handleSubmit()
    {
        if (value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        {
        setSubscribe(true)
        setError(false);
        }
        else{
            setError(true);
        }
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
      <input className={styles.email} onChange={(e) => setValue(e.target.value)}
 value={value} type="email" placeholder="Entrez votre adresse email" required/>
      <button className={styles.submit_email} type="button" onClick={()=>handleSubmit()}>{button()}
       </button>
    </form>
    {error && <p style={{color: "#F22F2F",fontSize:"0.8vw" }}>*Utiliser une adresse email valide.</p>}
</div>
 )
}

export default Footer;