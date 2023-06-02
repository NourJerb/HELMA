// import { useRef } from "react";
import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from  'react-icons/ai';
import inputSearch from './inputSearchNavBar.js';
import logoNavBar from'./../assets/logoNavBar.png';
import respLogo from'./../assets/respLogo.png';
import menuToggle from './../assets/menuToggle.png';
import loop from './../assets/loop.png';
import search from './../assets/search.png';


import styles from './NavBar.module.css'

function NavBar() {
  // toggle Menu
    const [toggleMenu, setToggleMenu] = useState(false)
     const toggleNav = () => {
        setToggleMenu(!toggleMenu)
     }
     const [screenWidth, setScreenWidth] = useState(window.innerWidth)
     useEffect(() => {

       const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
       }, [])

      useEffect(() => {
        const changeWidth = () => {
           setScreenWidth(window.innerWidth);
        }
         return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
// search bar
    useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 570px)");
    const handleMediaQueryChange = (e) => {
        setToggleMenu(false);
        };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
       }, []);

// search bar
const [displayInput, setDisplayInput] = useState(false);
useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 570px)");
    const handleMediaQueryChange = (e) => {
        setDisplayInput(false);
        };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
       }, []);


    return (
      
       <div className={styles.allNavBar}>
        
        <img className={styles.logoNB} src={logoNavBar} />
        
      <nav className={`${styles.navBar} `}>
        
            
             {((toggleMenu || screenWidth > 300) && (<div className={styles.hbc} >
                
               <div className={`${styles.elem} ${styles.elemi}`}><a href="#">HOME</a></div>
                <div className={styles.aaaa}></div>
                <div className={`${styles.elem} ${styles.elemi}`}><a href="#">SHOP</a></div>
                <div className={styles.aaaa}></div>
                <div className={`${styles.elemi} ${styles.elemi3}`} ><a href="#">CONTACTS</a></div>
              
                
            </div>))}
                  <div className={styles.searchbar}>
                  <input type="text"  className={styles.inputText} /> 
                  <button className={styles.loopBtn}  type="submit" > 
                  <img src={loop} className={styles.loop}/>
                  </button>
                  </div>
                         
        </nav>


        
        <div className={styles.respNavBar}>

          <div className={styles.firstPart}>
              


          <div className={`${styles.searchbar} ${styles.bar2}`}>
                  { (displayInput) && (<input type="text"  className={styles.inputText} /> )}
                  <button className={styles.loopBtn}  type="submit"  onClick={() => setDisplayInput(!displayInput)}> 
                  <img src={search} className={styles.search}/>
                  </button>
          </div>
                  

          {(toggleMenu ) && ((<div className={styles.secondPart}>
                
                <div className={styles.elemm1}><a className={styles.elemm} href="#">HOME</a><hr></hr></div>
                <div ><a className={styles.elemm} href="#">SHOP</a><hr></hr></div>
                <div className={styles.last}><a className={styles.elemm} href="#">CONTACTS</a></div>
          </div>))}
          <img src={menuToggle} className={styles.btnMenu} onClick={() => setToggleMenu(!toggleMenu)}/></div>
        
        
    </div>
      </div>
        
    )
    }

export default NavBar;
