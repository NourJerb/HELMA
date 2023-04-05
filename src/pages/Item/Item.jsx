import React from "react";
import "./Item.css";
import { produit } from "../assets/file"

function Item() {
  return  <div className="container-description">
  <h1>sdgsdgsdgsdgsdgsdgsdg</h1>
  <div className="presentation-description">
     <div className="donnees-description">
       <div>
         <h4>Poids :</h4>
         <span>dsgqsfsqfsqfqs</span>
       </div>
       <div>
         <h4>Couleur de la pierre principale:</h4>
         <span>kjbkhgkg</span>
       </div>
       <div>
         <h4>Marque :</h4>
         <span>sdsdfs</span>
       </div>
       <div>
         <h4>Forme de la pierre principale:</h4>
         <span>sdfsdfsf</span>
       </div>
       <div>
         <h4>Matière:</h4>
         <span>dsfsdfsdf</span>
       </div>
       <div>
         <h4>Type:</h4>
         <span>bague</span>
       </div>
     </div>
     <div className="prod">
     <img className="image-description" src={produit} alt="wait" />
     
     <h4 className="prix-produit">500<span className="dt">DT</span></h4>
     
     </div>


  </div>
  <button className="button-description">Commander</button>
</div>;
}

export default Item;
