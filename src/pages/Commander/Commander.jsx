import "./Commander.css";
import image from '../../assets/image.png';
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from 'react';

function Commander() {
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const handleInputChange = (e) => {};

  const handleSubmit = (values) => {
    let newErrors = {};

    if (!values.firstName.match(/^[a-zA-Z]+$/)) {
      newErrors.fst = '*Utiliser seulement des lettres.';
    }

    if (!values.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lst =  '*Utiliser seulement des lettres.';
    }

    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = '*Utiliser une adresse mail valide.';
    }

    if (!values.phone.match(/^[0-9]+$/) || values.phone.length !== 8) {
      newErrors.phone = '*Utiliser exactement 8 chiffres.';
    }

    if (values.countryy === "Country") {
      newErrors.country = "*Select a country.";
    }

    if (values.city === "City") {
      newErrors.city = "*Select a city.";
    }

    if (values.zipcode === "Zip code") {
      newErrors.zipcode = "*Select a zip code.";
    }

    if (values.state === "State") {
      newErrors.state = "*Select a state.";
    }

    setErrors(newErrors);
    setShowErrors(true);
    
  };

  return (
    <div className="big">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          countryy: "",
          city: "",
          zipcode: "",
          state: "",
          address: ""
        }}
        onSubmit={handleSubmit}
      >
        <Form action="../cofirmer" method="get" className="forms" >
          <div>
            <div className="ddiv">
              <div className="ss-container1">
                <label htmlFor="firstName" className="titre">Prénom</label>
                <Field type="text" className="inputt" name="firstName" placeholder="Prénom" required />
                <div className="error">
                {showErrors && errors.fst && <p style={ {margin:-5 , padding:0}   }>{errors.fst}</p>}
                </div>
              </div>
              <div className="ss-container1">
                <label htmlFor="lastName" className="titre">Nom</label>
                <Field type="text" className="inputt" name="lastName" placeholder="Nom" required />
                <div className="error">
                {showErrors && errors.lst && <p  style={ {margin:-5 , padding:0} }>{errors.lst}</p>}
                </div>
              </div>
            </div>

            <div className="ddiv1">
              <div className="ss-container2">
                <label htmlFor="email" className="titre">E-Mail</label>
                <Field type="email" className="inputt" name="email" placeholder="Your email" required />
                <div className="error">
                {showErrors && errors.email && <p style={ {margin:-5 , padding:0}}>{errors.email}</p>}
              </div>
              </div>
              <div className="ss-container2">
                <label htmlFor="phone" className="titre" id="ph">Numéro</label>
                <Field type="tel" className="inputt" name="phone" placeholder="Your phone" required />
                <div className="error">
                {showErrors && errors.phone && <p style={ {margin:-5 , padding:0}}>{errors.phone}</p>}
              </div>
            </div>
            </div>

            <div className="ddiv2">
              <div className="ss-container2">
                <label htmlFor="country" id="country" className="titre">Pays</label>
                <Field as="select" id="countryy" className="selectt" name="country" required>
                  <option value="" className="vv">Country</option>
                  <option value="TU">Tunisia</option>
                </Field>
                {showErrors && errors.countryy && <p style={ {margin:-5 , padding:0}}>{errors.countryy}</p>}
              </div>

              <div className="ss-container2">
                <label htmlFor="city" id="ci" className="titre">Ville</label>
                <Field as="select" id="City" className="selectt" name="city" required>
                  <option className="vv" value="">City</option>
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
<option value="JD">Jendouba</option> 
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
                </Field>
                {showErrors && errors.city && <p className="error">{errors.city}</p>}
              </div>

              <div className="ss-container2">
                <label htmlFor="zipcode" id="zc" className="titre">Zip code</label>
                <Field type="text"  name="zipcode" placeholder="Zip code" required id="zic"  />
                  
                
                {showErrors && errors.zipcode && <p className="error">{errors.zipcode}</p>}
              </div>
            </div>

            <div className="ddiv3">
              <div className="ss-container3">
                <label htmlFor="state" id="st" className="titre">Etat</label>
                <Field as="select" name="state" className="state" id="State" required>
                  <option value="" className="vv">Etat</option>
                  <option value="kkk">kkkk</option>
                 
                </Field>
                {showErrors && errors.state && <p className="error">{errors.state}</p>}
              </div>

              <div className="divad">
                <label htmlFor="address" id="add" className="titre">Adresse</label>
                <Field type="text" id="Address" className="inputt" name="adresse" placeholder="Address" />
              </div>
              </div>

<div className="tt">
  <img src={image} className="imaage" />
  <div className="parbt">
    <p className="firstparagraph">Bague CELOR en Or 375/1000 Blanc et oxyde blanc</p>
  </div>
</div>

<div className="bouttton">
  <input type="button" value="Retour" className="bt" required />
  <input type="submit" value="Continuer" className="mbt" required />
</div>
</div>
</Form>
</Formik>
</div>
 );
}

export default Commander;