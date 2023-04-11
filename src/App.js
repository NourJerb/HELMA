import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Presentation from "./pages/Item/Item";
import Services from "./pages/Commander/Commander";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Commander from "./pages/Commander/Commander";
import Confirmer from "./pages/Confirmer/Confirmer";
import Item from "./pages/Item/Item";
import Shop from "./pages/Shop/Shop";
import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/item" element={<Item/>} />
          <Route path="/commander" element={<Commander/>} />
          <Route path="/confirmer" element={<Confirmer/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
