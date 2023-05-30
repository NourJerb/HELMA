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
        
        <img className='logoNB' src={logoNavBar} width={90} height={50}/>
        <nav   className='navBar-container'>
        
            
            {((toggleMenu || screenWidth > 300) && (<ul className='hbc' >
                
                <li className='elem elemi'><a href="#">HOME</a></li>
                <li className='elem elemi'><a href="#">SHOP</a></li>
                <li className='elemi elemi3' ><a href="#">CONTACTS</a></li>
              
                
            </ul>))}
             <ul className='searchC'>
                 <li className=" search-container">
                     <input type="text"  className='inputText' /> 
                    <button className='loopBtn ' type="submit" >
                       <AiOutlineSearch  className='searchloop' color='#fff' size={25}  /> 
                    </button>
                    
                    
                </li>
            </ul> 
        </nav>
        <div className='respNavBar'>
          <div className='firstPart'>
            <div className='respImgLogoNb'><img src={respLogo} /></div>
            <div class="searchContainerE">
              <div class="search">
                  <input className='inputC1' type="text" placeholder=" " />
                  <div>
                  <img src={loop} />
                  </div>
              </div>
              
              <a class="dribbble" href="https://dribbble.com/shots/5547403-Search-input-animation" target="_blank"><img src="https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png" alt=""/></a>
               
              
 
               
   
            </div> 
          
            {/* <div><inputSearch></inputSearch></div> */}
            <div><img src={menuToggle} className='btnMenu1' onClick={toggleNav}/></div>
          </div>
          {((toggleMenu ) && (<div className='secondPart'>
                
                <div className='elemm1'><a className='elemm' href="#">HOME</a><hr className='lineNB lineNB1'></hr></div>
                
                <div className='elemm1'><a className='elemm' href="#">SHOP</a><hr className='lineNB lineNB2'></hr></div>
                <div className='elemm1'><a className='elemm' href="#">CONTACTS</a><hr className='lineNB lineNB3'></hr></div>
            
          </div>))}

        </div>
    </header>
      
        
    )
    }

export default NavBar;
