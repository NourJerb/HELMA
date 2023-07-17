import Footer from "./Footer";
import styles from "./HelmaFooter.module.css"
import logo from "./logo_footer.png"
import fb from "./Facebook.png"
import insta from "./Instagram.png"
import whatsapp from "./WhatsApp.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';



function HelmaFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo_social}>
                    <img className={styles.logo_footer} src={logo} alt="logo" />
                    <div className={styles.social_media}>
                        <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2F" className={styles.social_p}>Twitter</Link>
                        <span></span>
                        <Link to="https://www.instagram.com/helmacreations/" className={styles.social_p}>Instagram</Link>
                        <span></span>
                        <Link to="https://www.facebook.com/profile.php?id=100063541813622" className={styles.social_p}>Facebook</Link>
                    </div>
                    <div className={styles.icons}>
                        <a href="" target="_blank"><img className={styles.icon} src={fb} alt="Facebook" /></a>
                        <a href="" target="_blank"><img className={styles.icon} src={insta} alt="Instagram" /></a>
                        <a href="" target="_blank"><img className={styles.icon} src={whatsapp} alt="Whatsapp" /></a>
                    </div>
                    <p className={styles.helma}>© 2022 Helma. All Rights Reserved.</p>

                </div>
                <div className={styles.sections}>
                    <div className={styles.section}>
                        <div className={styles.title}>
                            <h6>HELMA</h6>
                            <hr />
                        </div>
                        <Link to="/home" className={styles.pages}>Accueil</Link>
                        <Link to="/shop" className={styles.pages}>Boutique</Link>
                        <Link to="/contacts" className={styles.pages}>Contacts</Link>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.title}>
                            <h6>CONTACTS</h6>
                            <hr />
                        </div>
                        <div className={styles.contact_container}>
                        <div className={styles.contactt}>
                            <div className={styles.iconss}><FontAwesomeIcon icon={faLocationDot} style={{ color: "#e8c895" }} /></div>
                            <div className={styles.contact_para}>Rue Du Général Jawhar، Ariana</div>
                        </div>

                        <div className={styles.contactt}>
                            <div className={styles.iconss}><FontAwesomeIcon icon={faEnvelope} style={{ color: "#e8c895" }} /></div>
                            <div className={styles.contact_para}>helmacreations@gmail.com</div>
                        </div>

                        <div className={styles.contactt}>
                            <div className={styles.iconss}><FontAwesomeIcon icon={faPhone} style={{ color: "#e8c895" }} /></div>
                            <div className={styles.contact_para}>23 445 888</div>
                        </div>
                        </div>
                    </div>



                    <div className={styles.subscribe}>
                        <div className={styles.title}>
                            <h6>ABONNEZ-VOUS</h6>
                            <hr />
                        </div>
                        <div className={styles.newsletter}>
                            <p>Soyer le premier a recevoir nos nouveautés !</p>
                            <Footer className={styles.new} />
                        </div>

                    </div>
                </div>
                <div className={styles.contact}>
                    <h6>NOUS CONTACTER</h6>
                    <p>+216 99 999 999</p>
                    <p>Helma@gmail.com</p>
                </div>
            </div>

        </div>
    )
}
export default HelmaFooter;