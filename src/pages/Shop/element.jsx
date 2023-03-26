import React from "react"
import './element.css';


function Element(props){
    return(<div className="element">
        <div>
            <div className="img"></div>
            <div>{props.e[0]}</div>
            <div>{props.e[1]}</div>
            <div>{props.e[2]}</div>
            <div>{props.e[3]}</div>
            <div>{props.e[4]}</div>
            <div>{props.e[5]}</div>
            <button className="boutton">Commander</button>
        </div>

            
    </div>);
}

export default Element;