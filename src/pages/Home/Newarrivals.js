import BigProductCard2 from "./Component/BigProductCard2";
import ProductCard2 from "./Component/ProductCard2";
import "./Newarrivals.css";
import img1 from "./Assets/Product 1.jpg";
import img2 from "./Assets/Product 2.jpg";
import img3 from "./Assets/Product 3.jpg";
import img4 from "./Assets/Product 4.jpg";
import img5 from "./Assets/Product 5.jpg";
import img6 from "./Assets/Product 6.jpg";

const Newarrivals = () => {
  return (
    <div className="newarrivals-container">
      <div className="title-container">
        <h3 className="title">New arrivals</h3>
      </div>

      <div className="Product-container2">
        <div className="Product-component">
          <BigProductCard2 data={{ imgSrc: img1 }} />
        </div>
        <div className="Product-component">
          <ProductCard2 data={{ imgSrc: img2 }} />
        </div>
        <div className="Product-component">
          <ProductCard2 data={{ imgSrc: img3 }} />
        </div>
      </div>
      <div className="Product-container2">
        <div></div>
        <div className="Product-component2">
          <ProductCard2 data={{ imgSrc: img4 }} />
        </div>
        <div className="Product-component2">
          <ProductCard2 data={{ imgSrc: img5 }} />
        </div>
        <div className="Product-component2">
          <BigProductCard2 data={{ imgSrc: img6 }} />
        </div>
      </div>
    </div>
  );
};
export default Newarrivals;
