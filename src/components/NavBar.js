// import { useRef } from "react";
import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from  'react-icons/ai';
import inputSearch from './inputSearchNavBar.js';
import logoNavBar from'./../assets/logoNavBar.png';
import respLogo from'./../assets/respLogo.png';
import menuToggle from './../assets/menuToggle.png'
import loop from './../assets/loop.png'


import './NavBar.css'

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
const [displayInput, setDisplayInput] = useState(false);
useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 840px)");
    const handleMediaQueryChange = (e) => {
        setDisplayInput(false);
        };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
       }, []);


    return (
      
       <div className='allNavBar'>
        
        <img className='logoNB' src={logoNavBar} />
        <nav   className='navBar-container'>
        
            
             {((toggleMenu || screenWidth > 300) && (<div className='hbc' >
                
                <div className='elem elemi'><a href="#">HOME</a></div>
                <div className='aaaa'></div>
                <div className='elem elemi'><a href="#">SHOP</a></div>
                <div className='aaaa'></div>
                <div className='elemi elemi3' ><a href="#">CONTACTS</a></div>
              
                
            </div>))}
                  <div className='searchbar'>
                  <input type="text"  className='inputText' /> 
                  <button className='loopBtn ' type="submit" > 
                  <AiOutlineSearch  className='searchloop' color='#fff' size={25}  />
                  </button>
                  </div>
                         
        </nav>


        
        <div className='respNavBar'>

          <div className='firstPart'>
              


          <div className='searchbar bar2'>
                  { (displayInput) && (<input type="text"  className='inputText' /> )}
                  <button className='loopBtn ' type="submit"  onClick={() => setDisplayInput(!displayInput)}> 
                  <AiOutlineSearch  className='searchloop' color='#fff' size={25}  />
                  </button>
          </div>
                  

          {(toggleMenu ) && ((<div className='secondPart'>
                
                <div className='elemm1'><a className='elemm' href="#">HOME</a><hr></hr></div>
                <div className='elemm1'><a className='elemm' href="#">SHOP</a><hr></hr></div>
                <div className='last'><a className='elemm' href="#">CONTACTS</a></div>
          </div>))}
          <div><img src={menuToggle} className='btnMenu' onClick={toggleNav}/></div>
        </div>
        
    </div>
      </div>
        
    )
    }

export default NavBar;
