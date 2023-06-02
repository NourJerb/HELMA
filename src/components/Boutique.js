import styles from './Boutique.module.css';
function Boutique(){
    return(
        <div className={styles.boutique}>
            <div className={styles.helmaJewelry}>
                <p className={styles.helma}>HELMA</p>
                <p className='text'>All <span className={styles.jewelry}>jewellery</span> items</p>
            </div>
            <div className={styles.btnSeeShop}>
                <button className={styles.btnSeeShop1}>See Shop</button>
            </div>

        </div>
    )
}
export default Boutique;