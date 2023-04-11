import React, {usestate} from "react";
function MonFormulaire() {
    const [name , setNom] = React.useState('');
    const [last  , setLast] = React.useState('');
    const [phone  , setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [Zip_code , setZipCode] = React.useState('');
    const [State , setState] = React.useState('');
    const [Address , setAddress] = React.useState('');
  function soumettreFormulaire(e) {
        e.preventDefault();
        if (country === '--country--' || city==='--city--') {
            React.setMessageErreur('Veillez réintroduire attentivement vos données SVP');
          return;
        }
        console.log('First name:', name);
        console.log('Last name:', last);
        console.log('Your phone:', phone);
        console.log('Your Email:', email);
        console.log('country:', country);
        console.log('City:', city);
        console.log('Zip code:', Zip_code);
        console.log('State:', State);
        console.log('Address:', Address); 
    }
    function handleNomChange(e) {
        React.setNom(e.target.value);
      }
      function handleLastChange(e) {
        React.setLast(e.target.value);
      }
      function handlePhoneChange(e) {
        React.setPhone(e.target.value);
      }
    
      function handleEmailChange(e) {
        React.setEmail(e.target.value);
      }
      function handleCountryChange(e) {
        React.setCountry(e.target.value);
        React.setMessageErreur(''); 
      }
      function handleCityChange(e) {
        React.setCity(e.target.value);
        React.setMessageErreur(''); 
      }
      function handleZipCodeChange(e) {
        React.setZipCode(e.target.value);
      }
      function handleStateChange(e) {
        React.setState(e.target.value);
      }
      function handleAddressChange(e) {
        React.setAddress(e.target.value);
      }
    }
  export default MonFormulaire ;
