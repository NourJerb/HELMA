import Footer from "./Footer";
import styles from "./HelmaFooter.module.css"
import logo from "./logo_footer.png"
import fb from "./Facebook.png"
import insta from "./Instagram.png"
import whatsapp from "./WhatsApp.png"

function HelmaFooter() {
    return (
        <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.logo_social}>
                <img className={styles.logo_footer} src={logo} alt="logo" />
                <div className={styles.social_media}>
                    <p>Twitter</p>
                    <span></span>
                    <p>Instagram</p>
                    <span></span>
                    <p>Facebook</p>
                    </div>
                    <div className={styles.icons}>
                    <a href="" target="_blank"><img className={styles.icon} src={fb} alt="Facebook" /></a>
                    <a href="" target="_blank"><img className={styles.icon} src={insta} alt="Instagram" /></a>
                    <a href="" target="_blank"><img className={styles.icon} src={whatsapp} alt="Whatsapp" /></a>
                    </div>

                
            </div>
            <div className={styles.sections}>
            <div className={styles.section}>
                <div className={styles.title}>
                    <h6>HELMA</h6>
                    <hr />
                </div>
                <p>Home</p>
                <p>Boutique</p>
                <p>Contacts</p>
            </div>
            <div className={styles.section}>
                <div className={styles.title}>
                    <h6>POLICY</h6>
                    <hr />
                </div>
                <p>Terms of Usage</p>
                <p>Privacy Policy</p>
            </div>
            <div className={styles.section}>
                <div className={styles.title}>
                    <h6>CATEGORIES</h6>
                    <hr />
                </div>
                <p>Ring</p>
            </div>
            <div className={styles.subscribe}>
                <div className={styles.title}>
                    <h6>SUBSCRIBE</h6>
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
        <p className={styles.helma}>© 2022 Helma. All Rights Reserved.</p>
        </div>
    )
}
export default HelmaFooter;