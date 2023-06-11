import './BrandList.css';
import React from 'react';


function BrandList({ brands, onBrandSelect }) {
 return(
   <div className='brandListContainer'>
     {brands.map(brand => (
       <button className='brandListBtn' key={brand.id} onClick={() => onBrandSelect(brand)}>{brand.name}</button>
     ))}
   </div>
 )
}

export default BrandList;