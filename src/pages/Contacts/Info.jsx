import styles from "./Info.module.css"

function Info (promps){
  return <div className={styles.container2}>
     <div className={styles.a}><img src={promps.icon} alt="icon" /></div>
     <div className={styles.a}>{promps.nom}</div>
     <div className={styles.a}>{promps.information}</div>
  </div>
}

export default Info 