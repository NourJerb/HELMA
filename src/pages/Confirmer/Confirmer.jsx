import React from "react";
import "./Confirmer.css";
import image3 from "../../assets/image3.png"

function Confirmer() {

  return <div className="big" style={{border:"solid",width:"80%",marginLeft:"10%",height:"60vh",borderRadius:"3vh",border:"1px solid #707070",overflow:"hidden"}}>
    <div  className="ct">
      <div className="imagecontainer">
    <img className="image" src={image3}/>
    </div>
    <div className="paragraph">
    <p className="first-paragraph"> Votre lettre est reçue avec succés.</p><br/>
    <p className="second-paragraph"> Notre manager vous contactera dans les plus brefs délais</p><br/>
    </div>
    <input type="button" value="Retourner" className="buuton"></input>
    </div>
     
  </div>;
}

export default Confirmer;
