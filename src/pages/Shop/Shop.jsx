import React from "react";
import styles from "./Shop.module.css";
import {useState} from 'react'
import { useEffect } from 'react';
import { Route,Routes,useLocation} from 'react-router-dom';
import Pagination from './pagination';
import Table from './table';
import {getLength, products} from '../../data/data';
import { getProducts } from "../../data/data";
// import { getProducts } from '../../components/NavBar';




function Shop() {
  const mediaQuery = window.matchMedia("(max-width: 870px)");
  const mediaQuery1 = window.matchMedia("(min-width: 871px)");
  const [count, setCount] = useState(6);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(count);
  const [tab,setTab]=useState(products)
  const [totalPages,setTotalPages]=useState(Math.ceil(getLength()/limit))

  
  useEffect(() => {
    const updateCount = () => {
      if (mediaQuery.matches) {
        setCount(6);
        setLimit(count)

      } else if (mediaQuery1.matches) {
        setCount(6);
        setLimit(count)
        
      }
      localStorage.setItem("limit",limit)
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



  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabData = JSON.parse(queryParams.get('tab'));
    if (tabData && Array.isArray(tabData) && tabData.length > 0) {
      setTab(tabData);
      setTotalPages(Math.ceil(tabData.length/limit))
    }
  }, [location.search]);


function getProducts(page,limit){
    
   let array=[];
   if (tab && Array.isArray(tab) && tab.length > 0) {
   for (let i=(page-1)*limit;i<(page*limit)&&tab[i];i++){
     array.push(tab[i]);
      }}
       return array;
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
    <Table products={getProducts(page,limit)}  />
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





// // Get current jobs
// const indexOfLastJob = currentPage * jobPerPage;
// const indexOfFirstJob = indexOfLastJob - jobPerPage;
// const currentjobs = data.slice(indexOfFirstJob, indexOfLastJob);

// // Change page
// const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //filtring the data with this function
// const handleTextSearch = (e) => {
//   if (e.target.value === "") {
//     setData(filterdata);
//   } else {
//     const filterresult = filterdata.filter(
//       (jobs) =>
//         jobs.title.toLowerCase().includes(e.target.value) ||
//         jobs.team.toLowerCase().includes(e.target.value)
//     );
//     setData(filterresult);
//   }

//   setFilterVal(e.target.value);
// };



// return (
//   <>
//     <Container className="dashboard">
//       <TextField
//         className="search"
//         id="standard-search"
//         label="Search field"
//         type="search"
//         value={filterval}
//         variant="standard"
//         onChange={handleTextSearch}
//       />
//       <Button
//         className="addjobbut"
//         size="large"
//         onClick={() => {
//           console.log("im working");
//           navigate("/adminjobform");
//         }}
//       >
//         <AddCircleOutlineIcon
//           style={{ color: "#3e9ede", paddingRight: "5px" }}
//         />
//         Add A Job
//       </Button>
//       <Button
//         className="addjobbut"
//         size="large"
//         onClick={() => {
//           navigate("/userinfo");
//         }}
//       >
//         <ContactPageIcon style={{ color: "#3e9ede", paddingRight: "5px" }} />
//         Consult The Applications
//       </Button>
//       <Jobs data={ currentjobs } loading={ loading } onDelete={ onDelete } />
//       <Pagination
//         jobPerPage={jobPerPage}
//         totalJobs={data.length}
//         paginate={paginate}
//       />
//     </Container>
//   </>
// );
// }

// Ashwek Werghi
// const Pagination = ({ jobPerPage, totalJobs, paginate }) => {
// const pageNumbers = [];

// for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
//   pageNumbers.push(i);
// }

// return (
//   <nav className='page-nav'>
//     <ul className='pag-elt'>
//       {pageNumbers.map(number => (
//         <li key={number} className='page-number'>
//           <a onClick={() => paginate(number)}  >
//             {number}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );
// };

// export default Pagination;