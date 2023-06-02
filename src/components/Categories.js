import React, { useState } from 'react';
import BrandList from "./BrandList.js";
import styles from './Categories.module.css';
import iconfleche from './../assets/iconfleche.png'
function Categories(){
    const [brands, setBrands] = useState([
        { id: 1, name: 'Necklaces' },
        { id: 2, name: 'Earnings' },
        { id: 3, name: 'Bracelets' },
        { id: 4, name: 'Rings' },
        { id: 1, name: 'Brooches' },
        { id: 2, name: 'Anklets' },
        { id: 3, name: 'Belly chains' },
        { id: 4, name: 'Nose rings' },
        { id: 4, name: 'Headbands' },
        { id: 1, name: 'Hairbands' },
        { id: 2, name: 'Charms' },
        { id: 3, name: 'Chokers' },
        { id: 4, name: 'Pendants' },
        { id: 4, name: 'Cufflinks' },
        { id: 4, name: 'Tiara'},

        { id: 4, name: 'Nose studs' },
        { id: 4, name: 'Toe rings' },
        { id: 4, name: 'Arm cuffs' },

      
      ]);
      const [showBrandList, setShowBrandList] = useState(false);
      const [selectedBrand, setSelectedBrand] = useState(null);
      
  function handleBrandSelect(brand) {
    setSelectedBrand(brand);
    setShowBrandList(false);
    // do something with the selected brand, such as filtering a list of products
//     const iconContainer = document.querySelector('.iconFlech');

//     iconContainer.addEventListener('click', function() {
//     iconContainer.classList.toggle('clicked');
// });

  }
  const [isRotated, setIsRotated] = useState(false);

  function handleClick() {
    setIsRotated(!isRotated);
    
  }
  return (
    <div className={styles.containerCategoriesHr}>
      
      <div className={styles.containerCategories}>
        <div>
          <div className={styles.hh}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          
           </div>
          <div className={`${styles.containerBrandList} ${styles.elemItem} ${styles.elem1}`}>
           
           <button  className={styles.btnAllBrands} onClick={() => setShowBrandList(!showBrandList)}>ALL BRANDS  <img   src={iconfleche} className={styles.isRotated ? 'iconFlech clicked' : 'iconFlech'} 
      onClick={handleClick}/></button>
           
           
           <div  className={styles.theList} >
           {showBrandList && <BrandList brands={brands} onBrandSelect={handleBrandSelect} />}
           
           </div>
           
           
           {/* {selectedBrand && <p>You selected {selectedBrand.name}</p>} */}
       </div>
       <div className={`${styles.elemItem} ${styles.elem2}`}>xxxxxx</div>
       <div className={`${styles.elemItem} ${styles.elem3}`}>xxxxx</div>
       <div className={`${styles.elemItem} ${styles.elem4}`}> xxxxxxx</div>

       
       
       
        </div>
              <hr ></hr>

    </div>
    
  );
             
}
export default Categories;