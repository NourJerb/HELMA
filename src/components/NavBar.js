// import { useRef } from "react";
import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from  'react-icons/ai';
import { FaBars } from "react-icons/fa";
import './NavBar.css'

function NavBar() {
    // const navRef = useRef()
    // const showNavBar = () => {

    //     navRef.current.classList.toggle("responsive_nav")
    // }
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
    return (
      
       <header className='allNavBar'>
        
        <img src='logoHelmaCr.png' width={90} height={50}/>
        <nav   className='navBar-container'>
        
            {/* ref={navRef} */}
            {((toggleMenu || screenWidth > 1024) && (<ul className='hbc' >
                
                <li className='elem elemi'><a href="#">HOME</a></li>
                <li className='elem elemi'><a href="#">BOUTIQUE</a></li>
                <li className='  elemi '><a href="#">CONTACTS</a></li>
              
                {/* <button className="nav-btn  nav-close-btn" onClick={showNavBar}>
                        <FaTimes></FaTimes>

                </button> */}
            </ul>))}
            <ul>
                 <li className=" search-container">
                    <input type="text"  className='inputText'/>
                    <button type="submit" >
                      <AiOutlineSearch  className='searchloop' color='#fff' size={25}  />
                    </button>
                    
                  
                </li>
            </ul>
            <button  className='btnMenu' onClick={toggleNav}>
                <FaBars></FaBars>
            </button>
            
        </nav>
        </header>
      
        
    );
}

export default NavBar;
