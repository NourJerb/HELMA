import React, { useState } from 'react';
import BrandList from "./BrandList.js";
import styles from './Categories.module.css';
import iconfleche from './../assets/iconfleche.png'
import { useNavigate } from 'react-router-dom';
import { products } from '../data/data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Categories() {
  const navigate = useNavigate()
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
    { id: 4, name: 'Tiara' },

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

  function handleclick1() {
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes("bracelet".toLowerCase())
    );

    const queryParams = new URLSearchParams();

    queryParams.append('tab', JSON.stringify(filteredProducts));

    navigate(`/shop?${queryParams.toString()}`);
  }
  function handleclick2() {
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes("colier".toLowerCase())
    );

    const queryParams = new URLSearchParams();
    queryParams.append('tab', JSON.stringify(filteredProducts));

    navigate(`/shop?${queryParams.toString()}`);
  }

  function handleclick3() {
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes("bague".toLowerCase())
    );
    const queryParams = new URLSearchParams();
    queryParams.append('tab', JSON.stringify(filteredProducts));
    navigate(`/shop?${queryParams.toString()}`);
  }

  function handleclick4() {
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes("boucle".toLowerCase())
    );

    const queryParams = new URLSearchParams();
    queryParams.append('tab', JSON.stringify(filteredProducts));

    navigate(`/shop?${queryParams.toString()}`);
  }
  function handleClear() {
    const queryParams = new URLSearchParams();
    queryParams.append('tab', JSON.stringify(products));
    navigate(`/shop?${queryParams.toString()}`);
  }
  return (
    <div className={styles.containerCategoriesHr}>
       <div className={styles.containerCategories}>
         {/* <div>
          <div className={styles.hh}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

        </div>
        <div className={`${styles.containerBrandList} ${styles.elemItem} ${styles.elem1}`}>

           <button  className={styles.btnAllBrands} onClick={() => setShowBrandList(!showBrandList)}>ALL BRANDS  <img   src={iconfleche} className={styles.isRotated ? 'iconFlech clicked' : 'iconFlech'} 
      onClick={handleClick}/></button>
           
           
           <div  className={styles.theList} >
           {showBrandList && <BrandList brands={brands} onBrandSelect={handleBrandSelect} />}
           
           </div> 


           {selectedBrand && <p>You selected {selectedBrand.name}</p>} 
        </div>  */}
        <div className={`${styles.elemItem} ${styles.elem2}`} onClick={handleclick1}>Bracelet</div>
        <div className={`${styles.elemItem} ${styles.elem2}`} onClick={handleclick2}>Collier</div>
        <div className={`${styles.elemItem} ${styles.elem3}`} onClick={handleclick3}>Bague</div>
        <div className={`${styles.elemItem} ${styles.elem4}`} onClick={handleclick4}> Boucles oreilles</div>
        <div className={`${styles.elemItem} ${styles.elem4}`} onClick={handleClear}><FontAwesomeIcon icon={faXmark} className={styles.icon}/></div>




      </div>
      <hr ></hr> 

    </div>

  );

}
export default Categories;