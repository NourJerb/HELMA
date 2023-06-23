import './inputSearchNavBar.css';
import React from 'react';
function inputSearch(){
    
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    
    searchIcon.addEventListener('click', function() {
      searchIcon.classList.toggle('active');
      searchInput.classList.toggle('active');
    });
    
    searchInput.addEventListener('blur', function() {
      if (searchInput.value === '') {
        searchIcon.classList.remove('active');
        searchInput.classList.remove('active');
      }
    });
    
    return(

        
        <div class="search-container">
              <button class="search-icon"></button>
              <input class="search-input" type="text" placeholder="Search"/>
        </div>
           
           
       
    )
}
export default inputSearch;