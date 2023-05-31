import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import NavBar from './components/NavBar';
import Categories from './components/Categories'; 
import Boutique from './components/Boutique';
import Footer from './components/Footer';
import Shop from "./pages/Shop/Shop";
import Item from "./pages/Item/Item";
import Commander from "./pages/Commander/Commander";
import Confirmer from "./pages/Confirmer/Confirmer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Categories></Categories>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop/*" Component={Shop} />
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