
import Contacts from "./pages/Contacts/Contacts";
import Item from "./pages/Item/Item";

import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Item />
      <BrowserRouter>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="./pages/Item/Item" element={<Item/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
