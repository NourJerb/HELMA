import React from "react";
import "./Home.css";
import ProductSlider from "./ProductSlider";
import TopSellers from "./TopSellers";
import Newarrivals from "./Newarrivals";
import TopHome from "./TopHome";

function Home() {
  return(
  <React.Fragment>
    <TopHome />
    <Newarrivals />
    <br></br>
    <ProductSlider />
    <TopSellers />
  </React.Fragment>
  )
}

export default Home;
