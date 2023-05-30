import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./BigProductCard2.css";

const BigProductCard2 = (props) => {
  let { imgSrc } = props.data;
  return (
    <Card className="big-card-design2">
      <div >
        <Card.Img variant="top" className="big-product-photo2" src={imgSrc} />
      </div>
    </Card>
  );
};
export default BigProductCard2;
