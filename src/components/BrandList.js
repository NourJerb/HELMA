 import styles from './BrandList.module.css';
 import React from 'react';


function BrandList({ brands, onBrandSelect }) {
  return(
    <div className={styles.brandListContainer}>
      {brands.map(brand => (
        <button className={styles.brandListBtn} key={brand.id} onClick={() => onBrandSelect(brand)}>{brand.name}</button>
      ))}
    </div>
  )
}

export default BrandList;