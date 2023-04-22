
import './App.css';
import NavBar from './Components/NavBar.js';
import Boutique from './Components/Boutique.js';
import Footer from './Components/Footer.js';
import AllBrands from './Components/BrandList.js';
import Categories from './Components/Categories.js'; 


function App() {
  return (
    <div className="App1">
      <NavBar className="navigationBar"></NavBar>
      
      <Categories></Categories>  
      
      <Boutique className="shopElement"></Boutique>
      <Footer className="footerElement"></Footer>  
      
      
    </div>
  );
}

export default App;
