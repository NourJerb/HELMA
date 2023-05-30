// import { useRef } from "react";
import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from  'react-icons/ai';
import inputSearch from './inputSearchNavBar.js';

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
        
        <img className='logoNB' src='logoNavBar.png' width={90} height={50}/>
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
            <div className='respImgLogoNb'><img src='respLogo.png' /></div>
            <div class="searchContainerE">
              <div class="search">
                  <input className='inputC1' type="text" placeholder=" " />
                  <div>
                     <svg>
                       <use className='si'  xlinkHref="#path"/>
                     </svg>
                  </div>
              </div>
              
              <a class="dribbble" href="https://dribbble.com/shots/5547403-Search-input-animation" target="_blank"><img src="https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png" alt=""/></a>
               
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
                   <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"></path>
                  </symbol>
                </svg>
              </div>
 
               
   
            </div> 
          
            {/* <div><inputSearch></inputSearch></div> */}
            <div><img src='menuToggle.png' className='btnMenu1' onClick={toggleNav}/></div>
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
