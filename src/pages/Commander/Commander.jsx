import React ,{useState} from "react";
import "./Commander.css";
import image from '../assets/image.png';
import MonFormulaire from "../MonForm";
function Commander() {
  return <div style={{border:"solid",width:"80%",marginLeft:"10%",height:"80vh",borderRadius:"3vh",border:"1px solid #707070",overflow:"hidden"}}>
   

<form action="" method="post" style={{display:"flex",flexDirection:"column", justifyContent:"center",backgroundColor:"#40485B",paddingLeft:"10%",paddingTop:"0%",gap:"3%"}}>
  
  <div>
  <div style={{display:"flex",flexDirection:"row", gap:"5%"}}>
  <div style={{display:"flex",flexDirection:"column",gap:"1vh"}}>
  <label for="name" className="titre">First name:</label>
  <input type="text" className="inputt" name="name" placeholder="First name" onChange={(event) => React.setNom(event.target.value)} />
  </div>
  <div style={{display:"flex",flexDirection:"column",gap:"1vh"}}>
  <label for="last" className="titre" >Last name:</label> 
  <input type="text" className="inputt" name="last" placeholder="Last name"  onChange={(event) => React.setLast(event.target.value)}/> 
  </div>
  </div> 


  <div style={{display:"flex",flexDirection:"row", gap:"5%"}}>
  <div style={{display:"flex",flexDirection:"column",gap:"1vh"}}>
  <label for="phone" className="titre">Your phone:</label>
  <input type="text" className="inputt" name="phone" placeholder="Your phone" onChange={(event) => React.setPhone(event.target.value)} ></input>
  </div>
  <div style={{display:"flex",flexDirection:"column",gap:"1vh"}}>
  <label for="email" className="titre" >Your Email:</label> 
  <input type="text" className="inputt" name="phone" placeholder="Your phone" onChange={(event) => React.setPhone(event.target.value)} ></input>
  <input type="text" className="inputt" name="email" placeholder="Your Email" onChange={(event) => React.setEmail(event.target.value)} /> 
  </div>
  </div>



  <div style={{display:"flex",flexDirection:"row", gap:"5%"}}>

  <div style={{display:"flex",flexDirection:"column",gap:"1vh"}}>
  <label for="Country" id="country" className="titre">Country:</label>
  <select id="countryy" name="country" onChange={(event) => React.setCountry(event.target.value)}>
      <option value="">--Country--</option>
      <option value="TU">Tunisia</option>
  </select>
  </div>

  
  <div style={{display:"flex",flexDirection:"column",gap:"1vh"}}> 
  <label for="City" id="ci" className="titre">City:</label> 
  <select id="City" name="City" onChange={(event) => React.setCity(event.target.value)} >
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
  </div>

  <div style={{display:"flex",flexDirection:"column",gap:"1vh"}}>
  <label for="Zip code" id="zc" className="titre">Zip code:</label> 
  <select id="Zipcode" name="Zip code" onChange={(event) => React.setZipCode(event.target.value)}>
  <option value="">--Zip Code--</option>
    <option value="zipcode">200</option>
  </select> 
  </div>
  </div>

  <div style={{display:"flex",flexDirection:"row", gap:"5%"}}>
  <div style={{display:"flex",flexDirection:"column",gap:"1vh", width:"11.5%"}}>
  <label for="State" id="st" className="titre">State:</label>
  <select id="State" name="State" className="state" onChange={(event) => React.setState(event.target.value)}>
  <option value="">--State--</option>
  </select>
  </div>

  <div style={{display:"flex",flexDirection:"column",gap:"1vh",width:"31.5%"}}>
  <label for="Address" id="add" className="titre">Adress:</label> 
  <input type="text" id="Address" className="inputt" name="Address" placeholder="Address" onChange={(event) => React.setAddress(event.target.value)}/>
  </div>
  </div>
 
<div>
<input type="button" value="Back" className="bt" />
</div >
</div>

<div>
<div style={{display:"flex",flexDirection:"column",gap:"5%",width:"40%",height:"60vh",marginLeft:"58%",marginTop:"-45.5%"}}>
<div >
<img src={image} className="imaage"/> 
</div>
<div style={{width:"85%",marginLeft:"10%",marginTop:"-5%"}}>
<p className="firstparagraph"> Bague CELOR en Or 375/1000 Blanc et oxyde blanc</p>
</div> 
<input type="submit" value="Continue" className="mbt" />
</div>
</div>

</form>

</div>
}

export default Commander;