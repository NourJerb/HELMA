import React from "react";
import "./Shop.css";
import {useState} from 'react'
import { useEffect } from 'react';
import { Route,Routes,useLocation} from 'react-router-dom';
import Pagination from './pagination';
import Table from './table';
import {getUsers,getLength} from '../../data/dataselim'

function Shop() {
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  const mediaQuery1 = window.matchMedia("(min-width: 1025px)");
  let n=1
  if (mediaQuery.matches){
     n=10;
  }
  if(mediaQuery1.matches){
     n=9;
  }
  let [page, setPage] = useState(1);
  const [limit, setLimit] = useState(n);
  let totalPages=Math.ceil(getLength()/limit);
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

// My component 
let MyComponent = () => (
  <div id={localStorage.getItem('currentPage')} className="parent" >
    <Table users={getUsers(page,limit)} className="contain" />
    <Pagination totalPage={totalPages} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} className="pag" ></Pagination>   
  </div>
) 

//number of elements in the last Page
const elementLastPage=getLength()-(n*(totalPages-1))



// the problem of previous and next button
const path = location.pathname;
useEffect(() => {
  const newPage = Number(path[path.length-1]);
  if(newPage===localStorage.getItem('currentPage')){
  setPage(newPage);}
  else{
    localStorage.setItem('currentPage',newPage);
    setPage(newPage);
  }
},[]);

// giving title to the page 
let text='page '+localStorage.getItem('currentPage');
document.title = text;


const path1 = location.pathname;
if (path1==='/shop'){
  location.pathname+='/page1';
}

  return <div className="parent"> 
<Routes>
<Route  path='page1' exact element={<MyComponent  />}></Route>
<Route  path={'page'+localStorage.getItem('currentPage')} exact element={<MyComponent  />}></Route>
</Routes>
</div>;
}

export default Shop;
