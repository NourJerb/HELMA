import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = (props) => {
  let { imgSrc } = props.data;
  return (
    <Card className="card-design">
      <div>
        <Card.Img variant="top" className="product-photo" src={imgSrc} />
        
      </div>
    </Card>
  );
};
export default ProductCard;
