import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import './BigProductCard.css'

const BigProductCard = props => {
    let { imgSrc} = props.data;
    return (

        <Card className="big-card-design">
            <div >
                <Card.Img variant="top" className="big-product-photo" src={imgSrc} />
            </div>
        </Card>
    );
}
export default BigProductCard;