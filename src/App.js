import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import React from 'react';
import Contacts from "./pages/Contacts/Contacts";

import NavBar from "./components/NavBar.js";
import Shop from "./pages/Shop/Shop";
import Item from "./pages/Item/Item";
import Commander from "./pages/Commander/Commander.jsx";
import Confirmer from "./pages/Confirmer/Confirmer.jsx";
import HelmaFooter from "./Footer/HelmaFooter";



/* Merge*/
import Categories from "./components/Categories.js";
import Cm from "./pages/Commander/cm";
function App() {
  return (
    <>
      <div className="App1">
        <NavBar className="navigationBar"></NavBar>

        <Categories></Categories>
      </div>
      

      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/item" element={<Item />} />
        <Route path="/commander" element={<Commander />} />
        <Route path="/confirmer" element={<Confirmer />} />
        <Route path="/cm" element={<Cm />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
      <HelmaFooter/>
      
    </>
  );
}

export default App;