import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Item from "./pages/Item/Item";

import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="./pages/Item/Item" element={<Item/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
