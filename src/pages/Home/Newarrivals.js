import BigProductCard from "./Component/BigProductCard";
import ProductCard from "./Component/ProductCard";
import './Newarrivals.css'
import img1 from './Assets/Product 1.jpg';
import img2 from './Assets/Product 2.jpg';
import img3 from './Assets/Product 3.jpg';
import img4 from './Assets/Product 4.jpg';
import img5 from './Assets/Product 5.jpg';
import img6 from './Assets/Product 6.jpg';

const Newarrivals = () => {
    return (
       
        <div className="newarrivals-container">
            <div className="title-container">
                <h3 className="title">New arrivals</h3>
            </div>
            <div>
            <div className="Product-container2">
             
                <BigProductCard data={{ imgSrc: img1 }} />
                <ProductCard data={{ imgSrc: img2 }} />
                <ProductCard data={{ imgSrc: img3 }} />
               
            </div>
            <div className="Product-container2">
            
                <ProductCard data={{ imgSrc: img4}} />
                <ProductCard data={{ imgSrc: img5 }} />
                <BigProductCard data={{ imgSrc: img6 }} />
            </div>
            
            </div>
        </div>
        
    );
}
export default Newarrivals;