import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg } from "react-bootstrap";
import "./ProductCard2.css";

const ProductCard2 = (props) => {
  let { imgSrc } = props.data;
  return (
    <Card className="card-design2">
      <div>
        <Card.Img variant="top" className="small-product-photo2" src={imgSrc} />
        
      </div>
    </Card>
  );
};
export default ProductCard2;