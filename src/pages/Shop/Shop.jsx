import React from "react";
import styles from "./Shop.module.css";
import {useState} from 'react'
import { useEffect } from 'react';
import { Route,Routes,useLocation} from 'react-router-dom';
import Pagination from './pagination';
import Table from './table';
import {getUsers,getLength} from '../../data/dataselim'

function Shop() {
  const mediaQuery = window.matchMedia("(max-width: 870px)");
  const mediaQuery1 = window.matchMedia("(min-width: 871px)");
  const [count, setCount] = useState(9);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(count);
  let totalPages=Math.ceil(getLength()/limit);

  
  useEffect(() => {
    const updateCount = () => {
      if (mediaQuery.matches) {
        setCount(10);
        setLimit(count)

      } else if (mediaQuery1.matches) {
        setCount(9);
        setLimit(count)
        
      }
    };
  
    updateCount(); 
  
    const mediaQueryListener = (event) => {
      updateCount();
    };

    window.addEventListener("resize", mediaQueryListener);

    return () => {
      window.removeEventListener("resize", mediaQueryListener);
    };
  },[count]);

  console.log(page)
  if(page>totalPages){
       setPage(totalPages)
  }
  
  const location = useLocation();


  function handlePageChange(value){
    if(value === "&laquo;" || value ==="... " ){
      setPage(1);
      localStorage.setItem('currentPage',1);
      
     }

    else if(value === "&lsaquo;"){
      if(page !== 1){
        localStorage.setItem('currentPage',page-1);
        setPage(page - 1);   
        
      }
    }else if(value==="&rsaquo;"){
      if(page !== totalPages){
        setPage(page+1);
        localStorage.setItem('currentPage',page+1);
        
      }
    }else if (value === "&raquo;" || value ===" ..." || value ==="..." ){
      setPage(totalPages);
      localStorage.setItem('currentPage',totalPages);
      

    }else{
      setPage(value);   
      localStorage.setItem('currentPage',value);
    } 
  }
  

  // refreshing page issue
 useEffect(() => {
   const storedPage = localStorage.getItem('currentPage');
  if (storedPage) {
   setPage(parseInt(storedPage));
}
}, []);

function NumberInPath(path){
  let number=""
  for(let i=0;i<path.length;i++){
      if(path[i] in ["1","2","3","4","5","6","7","8","9","0"]){
        number+=path[i]
      }
  }
  return (number);
}

window.scrollTo({
  top: 0,
  left: 0,
});


/// My component 
function MyComponent(){
  return(
  <div id={localStorage.getItem('currentPage')} className={styles.parent} >
    <Table users={getUsers(page,limit)}  />
    <Pagination totalPage={totalPages} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} ></Pagination>   
  </div>)
}




// the problem of previous and next button
const path = location.pathname;
useEffect(() => {
  const newPage = Number(NumberInPath(path));
  if(newPage===localStorage.getItem('currentPage')){
  setPage(newPage);}
  else{
    localStorage.setItem('currentPage',newPage);
    setPage(newPage);
  }
},[path]);


// giving title to the page 
let text='page '+localStorage.getItem('currentPage');
document.title = text;


const path1 = location.pathname;
if (path1==='/shop'){
  location.pathname+='/page1';
}

  return <div className={styles.parent}> 
<Routes>
<Route  path='page1' exact element={<MyComponent  />}></Route>
<Route  path={'page'+localStorage.getItem('currentPage')} exact element={<MyComponent  />}></Route>
</Routes>
</div>;

}
export default Shop;

