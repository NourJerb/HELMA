import "./Commander.css";
import image from '../assets/image.png';
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from 'react';

function Commander() {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    const newErrors = { ...errors };

    
    if (id === 'fst' || id === 'lst') {
      const pattern = /^[a-zA-Z]+$/;
      if (!pattern.test(value)) {
        newErrors[id] = 'Ce champ ne doit contenir que des lettres.';
      } else {
        delete newErrors[id];
      }
    } else if (id === 'phoone') {
      const pattern = /^[0-9]+$/;
      if (!pattern.test(value)) {
        newErrors[id] = 'Ce champ ne doit contenir que des chiffres.';
      } else {
        delete newErrors[id];
      }
    } else if (id === 'email') {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(value)) {
        newErrors[id] = 'Veuillez entrer une adresse e-mail valide.';
      } else {
        delete newErrors[id];
      }
    }

    setErrors(newErrors);
  };

  // const handleSubmit = (values) => {
  //   let message = "";
  //   if (values.country === "") {
  //     message += "Sélectionnez un pays.\n";
  //   }
  //   if (values.state === "") {
  //     message += "Sélectionnez un état.";
  //   }

  //   if (message !== "") {
  //     alert(message);
  //   } else {

  //     console.log("Formulaire soumis avec succès :", values);
  //   }
  // };

  return (
    <div className="big">
      <form action="../confirmer" method="get" className="forms">
        <div>
          <div className="ddiv">
            <div className="ss-container1">
              <label htmlFor="name" className="titre">First name</label>
              <input type="text" className="inputt" name="FirstName" id="fst" placeholder="First name" onChange={handleInputChange} required />
              {errors.fst && <p className="error">{errors.fst}</p>}
            </div>
            <div className="ss-container1">
              <label htmlFor="last" className="titre">Last name</label>
              <input type="text" className="inputt" id="lst" name="lastName" placeholder="Last name" onChange={handleInputChange} required />
              {errors.lst && <p className="error">{errors.lst}</p>}
            </div>
          </div>

          <div className="ddiv">
            <div className="ss-container2">
              <label htmlFor="phone" className="titre">Your Email</label>
              <input type="email" className="inputt" name="phone" placeholder="Your phone"  required id="email" />
              {errors.email && <p className="error">{errors.email}</p>}
                          </div>
                          <div className="ss-container2">
                            <label htmlFor="email" className="titre" id="ph">Your phone</label>
                            <input type="tel" className="inputt" name="phone" id="phoone" placeholder="Your phone"  required />
                            {errors.phoone && <p className="error">{errors.phoone}</p>}
                          </div>
                        </div>
              
                        <div className="ddiv2">
                          <div className="ss-container2">
                            <label htmlFor="Country" id="country" className="titre">Country</label>
                            <select className="selectt" id="countryy" name="country" required onChange={handleInputChange}>
                              <option value="" className="vv">Country</option>
                              <option value="TU">Tunisia</option>
                            </select>
                            {errors.country && <p className="error">{errors.country}</p>}
                          </div>
                          
                          <div className="ss-container2">
                            <label htmlFor="City" id="ci" className="titre">City</label>
                            <select id="City" className="selectt" name="City" required onChange={handleInputChange}>
                              <option className="vv" value="">city</option>
                              <option value="TUN">Tunis</option>
                              <option value="SF">Sfax</option>
                              <option value="SS">Sousse</option>
                              {/* ... other options ... */}
                            </select>
                            {errors.city && <p className="error">{errors.city}</p>}
                          </div>
              
                          <div className="ss-container2">
                            <label htmlFor="Zip code" id="zc" className="titre">Zip code</label>
                            <select id="Zipcode" name="Zip code" className="selectt" required onChange={handleInputChange}>
                              <option value="" className="vv">Zip Code</option>
                              <option value="zipcode">200</option>
                            </select>
                            {errors.zipcode && <p className="error">{errors.zipcode}</p>}
                          </div>
                        </div>
                      
              
                        <div className="ddiv3">
                          <div className="ss-container3">
                            <label htmlFor="State" id="st" className="titre">State</label>
                            <select id="State" name="State" className="state" required onChange={handleInputChange}>
                              <option value="" className="vv">State</option>
                              <option value="kkk">kkkk</option>
                            </select>
                            {errors.state && <p className="error">{errors.state}</p>}
                          </div>
              
                          <div className="divad">
                            <label htmlFor="Address" id="add" className="titre">Address</label>
                            <input type="text" id="Address" className="inputt" name="Address" placeholder="Address" />
                          </div>
                        </div>
              
                        <div className="tt">
                          <img src={image} className="imaage" />
                          <div className="parbt">
                            <p className="firstparagraph">Bague CELOR en Or 375/1000 Blanc et oxyde blanc</p>
                          </div>
                        </div>
              
                        <div className="bouttton">
                          <input type="button" value="Back" className="bt" required />
                          <input type="submit" value="Continue" className="mbt" required />
                        </div>
                      </div>
                    </form>
                  </div>
                );
              }
              
              export default Commander;
              
