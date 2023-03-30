import React from "react"
import './element.css';


function Element(props){
    return(<div className="element">
        <div className="divv">
            <div className="img"></div>
            <div className="title">Men’s black hat Gucci</div>
            
            <div className="desc">Another masterpiece from the legendary designer. He designed new dress dev…</div>
            <div className="btn"><button className="boutton">Commander</button></div>
            
        </div>

            
    </div>);
}

export default Element;

//<div>{props.e[0]}</div> 
//<div>{props.e[4]}</div> to import from data