import React from "react";
import Info from "./Info";
import { location_icn } from "../../assets/file";
import { helmalogo } from "../../assets/file";
import { mail } from "../../assets/file";
import { icon } from "../../assets/file";
import { Facebook } from "../../assets/file";
import { Twitter } from "../../assets/file";
import { Instagram } from "../../assets/file";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <div className={styles.Location}>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.560055794065!2d10.181870815224274!3d36.853011179937816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34b19f4792b1%3A0x2625d8156f897678!2sRue%20Du%20G%C3%A9n%C3%A9ral%20Jawhar%2C%20Ariana!5e0!3m2!1sfr!2stn!4v1679754056707!5m2!1sfr!2stn"></iframe>
        <div className={styles['description-location']}>
          <div className={styles['loc-image']}>
            <img src={location_icn} alt="mail" />
          </div>
          <h6>Rue Du Général Jawhar، Ariana</h6>
        </div>
      </div>
      <div className={styles['helma-bande']}>
        <div className={styles['logo-bande']}>
          <img src={helmalogo} alt="logohelma" />
        </div>
      </div>

      <div className={styles.contactcp}>
        <Info icon={icon} nom='Telephone' information="+216 25 662 889" />
        <Info icon={location_icn} nom='Adresse' information="Rue Du Général Jawhar، Ariana" className={styles.locimg} />
        <Info icon={mail} nom='Email' information="helmacreations@gmail.com" />
      </div>

      <div className={styles['a-logos']}>
        <div className={styles.b}><a href="https://www.facebook.com/profile.php?id=100063541813622"><img src={Facebook} alt="Fb link" /></a></div>
        <div className={styles.b}><a href="https://www.instagram.com/helmacreations/"><img src={Instagram} alt="ig link" /></a></div>
        <div className={styles.b}><a href="https://twitter.com/"><img src={Twitter} alt="twitter link" /></a></div>
      </div>
    </div>
  );
}

export default Contacts;
