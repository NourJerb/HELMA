import React from "react";
import "./Commander.css";

function Commander() {
  return <div>
   <div>

<form action="" method="post">
  <label for="name" className="fn">First name:</label>
  <label for="name" className="ln" >Last name:</label> <br/>
  <input type="text" id="naame" name="name" placeholder="First name" ></input>
  <input type="text" id="name" name="name" placeholder="Last name" /> <br/> 
  <label for="email" className="em"> Your Email:</label>
  <label for="email" className="phoone"> Your phone:</label> <br/>
  <input type="phone" id="phone" name="phone" placeholder="Your phone"/>
  <input type="email" id="email" name="email" placeholder="Your Email"/> <br/>
  <label for="Country" className="country">Country:</label>
  <label for="City" className="ci">City:</label> 
  <label for="Zip code" className="zc">Zip code:</label> <br/>
  <select id="country" name="country" >
      <option value="">--Country--</option>
      <option value="TU">Tunisia</option>
        
  </select>
  <select id="City" name="City">
    <option value="">--city--</option>
    <option value="TUN">Tunis</option> 
    <option value="SF">Sfax</option> 
    <option value="SS">Sousse</option> 
    <option value="KR">Kairouan</option>
    <option value="MT">Métouia</option> 
    <option value="KB">Kebili</option> 
    <option value="BZ">Bizerte</option> 
    <option value="SB">Sidi Bouzid</option> 
    <option value="GB">Gabès</option> 
    <option value="AR">Ariana</option> 
    <option value="JD">Jendoouuuuuouba</option> 
    <option value="GF">Gafsa</option> 
    <option value="MS">Msaken</option>
    <option value="MD">Medenine</option>
    <option value="BJ">Béja</option> 
    <option value="KS">Kasserine</option>   
    <option value="MN">Monastir</option>
    <option value="HM">Hammamet</option>  
    <option value="TT">Tataouine</option> 
    <option value="MR">La Marsa</option>
    <option value="BA">Ben Arous</option>
    <option value="SZ">Sakiet ez Zit</option>  
    <option value="ZS">Zarzis</option>
    <option value="BG">Ben Gardane</option>
    <option value="MH">Mahdia</option>
    <option value="HS">Houmt Souk</option>    
    <option value="FC">Fouchana</option>
    <option value="KR">Le Kram</option>  
    <option value="BD">Le Bardo</option>
    <option value="Ek">El Kef</option>
    <option value="Eh">El Hamma</option>
    <option value="NB">Nabeul</option>
    <option value="DJ">Djemmal</option>
    <option value="KB">Korba</option>
    <option value="MT">Menzal Temime</option>
    <option value="GH">Ghardimaou</option>
    <option value="MG">Menzel Bourguiba</option>
    <option value="RD">Radès</option>
    <option value="MN">Manouba</option>
    <option value="KB">Kélibia</option>
  </select>
  <select id="Zipcode" name="Zip code">
  <option value="">--Zip Code--</option>
    <option value="zipcode">200</option>
  </select> <br/>
  <label for="State" className="st">State:</label>
  <label for="Address" className="add">Adress:</label> <br/>
  <select id="State" name="State" className="state">
  <option value="">--State--</option>
  </select>
  <input type="text" id="Address" name="Address" placeholder="Address" /><br/>
  <input type="button" value="Back" className="bt" />
 <input type="submit" value="Continue" className="mbt" />
  </form>
<img src={image} className="imaage"/>
 <p className="firstparagraph"> Bague CELOR en Or 375/1000 Blanc</p><br/>
 <p className="secondparagraph"> et Oxyde Blanc </p> <br/>
 <input type="button" value="Back" className="bt" />
 <input type="button" value="Continue" className="mbt" /> 


</div>    



</div>
}

export default Commander;
