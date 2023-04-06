import React from "react";
import "./Confirmer.css";
import image3 from "../assets/image3.png"

function Confirmer() {
  return <div>
    
    <img src={image3}/>
    <p className="first-paragraph"> Votre lettre est reçue avec succés.</p><br/>
    <p className="second-paragraph"> Notre manager vous contactera dans les plus brefs délais</p><br/>
    <input type="button" value="Retourner" className="button"></input>
     
  </div>;
}

export default Confirmer;
