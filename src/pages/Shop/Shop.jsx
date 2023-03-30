import React from "react";
import "./Shop.css";
import {useState} from 'react'
import { useEffect } from 'react';
import { Route,Routes,useLocation} from 'react-router-dom';
import Pagination from './pagination';
import Table from './table';
import {getUsers,getLength} from '../../data/dataselim'
import { BrowserRouter } from "react-router-dom";

function Shop() {
  let [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
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
  <div id={localStorage.getItem('currentPage')}>
    <hr></hr>
    <Table users={getUsers(page,limit)}  />
    <br></br>
    <Pagination totalPage={totalPages} page={page} limit={limit} siblings={1} onPageChange={handlePageChange}></Pagination>
  </div>
) 

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
});

// giving title to the page 
let text='page '+localStorage.getItem('currentPage');
document.title = text;


const path1 = location.pathname;
if (path1==='/shop'){
  location.pathname+='/page1';
}
console.log (location.pathname)

  return <div> kkkk 
<Routes>
<Route  path='page1' exact element={<MyComponent  />}></Route>
<Route  path={'page'+localStorage.getItem('currentPage')} exact element={<MyComponent  />}></Route>
</Routes>
</div>;
}

export default Shop;
