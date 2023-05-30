
import { returnPaginationRange } from './apputils';
import './pagination.css';
import { Link } from 'react-router-dom';
import right from "../../assets/right.png"
import left from "../../assets/left.png"





function Pagination(props){
    let array=returnPaginationRange(props.totalPage,props.page,props.limit,props.siblings)
    let nextPage;
        if (props.page + 1 <= props.totalPage) {
                nextPage = props.page + 1;
            } else {
        nextPage = props.totalPage;
                }

    let previousPage;
        if (props.page > 1) {
            previousPage = props.page - 1;
                    } else {
            previousPage = 1;
                        }
    
    return(<div className='pagination' >
        
        <Link to={`/shop/page${previousPage}`}  className="left" onClick={()=>props.onPageChange("&lsaquo;")} ><img src={left} alt="left" className='L'></img></Link>
        <div className='nav'>
        {array.map(value => {
            let pt
            if (value ===" ..." || value ==="..."){
                 pt=props.totalPage;
            }
            else {if (value ==="... "){
                pt=1;
            }
            else{
                pt=value;
            }}
            if(value === props.page){
                
               return(<div key={value} className="PageItem" onClick={()=>props.onPageChange(value)} style={{background:"#E8C895",color:"#FFFFFF"}} >{value}</div>);}
            else {
                
                return(<Link to={`/shop/page${pt}`} key={value} className="PageItem" onClick={()=>props.onPageChange(value)}>{value}</Link>);

            }
        })}
        </div>
         
         <Link to={`/shop/page${nextPage}`} onClick={()=>props.onPageChange("&rsaquo;")} className="right"><img src={right} alt="right" className='R'></img></Link>
         


    </div>);
}

export default Pagination; 

