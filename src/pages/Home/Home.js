import React from "react";
import "./Home.css";

import TopSellers from "./TopSellers";
import Newarrivals from "./Newarrivals";
import TopHome from "./TopHome";
import ImageSlider from "./ImageSlider";
import Swiper from "./Swiper";
function Home() {
  return(
  <React.Fragment>
    <TopHome />
    <Newarrivals />
    <br></br>
     <Swiper />
    <TopSellers />
   
  </React.Fragment>
  )
}

export default Home;
