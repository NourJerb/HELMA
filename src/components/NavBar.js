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
   
    //  // when I click to the search icon I will be allowed to write on the  input
       
    //  const searchIcon = document.getElementById('search-icon');
    //  const searchInput = document.getElementById('search-input');
     
    //  searchIcon.addEventListener('click', function() {
    //    searchInput.focus();
    //  });
     
    //  searchIcon.addEventListener('mouseover', function() {
    //    searchInput.style.cursor = 'text';
    //  });
     
    //  searchIcon.addEventListener('mouseout', function() {
    //    searchInput.style.cursor = 'default';
    //  });
     

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
             <div><ul className='searchC1'>
                 <li className=" search-container1">
                 <input type="text" class="inputText1" id="search-input" />
                  <img class="searchloop1" src="searchloop1.png" id="search-icon" alt="Search Icon" />
                    
                    
                    
                </li>
            </ul></div>  
          
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
