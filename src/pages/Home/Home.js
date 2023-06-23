import React from "react";
import TopSellers from "./TopSellers";
import Newarrivals from "./Newarrivals";
import TopHome from "./TopHome";
import 'swiper/swiper-bundle.css';
import Swiper from "./Swiper";
function Home() {
  return (
    <React.Fragment>
      <TopHome />
      <Newarrivals />
      <br></br>
      <Swiper />
      <TopSellers />
    </React.Fragment>
  );
}

export default Home;
