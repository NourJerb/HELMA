import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TopHome.css";
import "swiper/css/autoplay";
//import photos
import img6 from "./Assets/Product 6.jpg";
import img7 from "./Assets/Product 7.jpg";
import img8 from "./Assets/Product 8.jpg";
import img9 from "./Assets/Product 9.jpg";

function createSlide() {
  return (
    <SwiperSlide>
      <div className="Top-home-container">
        <img className="image-design" src={img6} alt="photo du produit" />
        <div>
        <p className="number">01</p>
        <p className="number-of-photos">/ 04</p>
        </div>
      </div>
    </SwiperSlide>
  );
}
function createSlide2() {
  return (
    <SwiperSlide>
      <div className="img">
        <img className="image-design" src={img7} alt="photo du produit" />
        <p className="number">02</p>
        <p className="number-of-photos">/ 04</p>
      </div>
    </SwiperSlide>
  );
}
function createSlide3() {
  return (
    <SwiperSlide>
      <div className="img">
        <img className="image-design" src={img8} alt="photo du produit" />
        <p className="number">03</p>
        <p className="number-of-photos">/ 04</p>
      </div>
    </SwiperSlide>
  );
}
function createSlide4() {
  return (
    <SwiperSlide>
      <div>
        <div className="img">
          <img className="image-design" src={img9} alt="photo du produit" />
          <p className="number">04</p>
          <p className="number-of-photos">/ 04</p>
        </div>
      </div>
    </SwiperSlide>
  );
}

function TopHome() {
  return (
    <div className="top-home-design">
      <Swiper
        modules={[ Pagination, Autoplay]}
        SlidesPerView={1}
        Navigation
        autoplay={ true }
        Pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide2()}
        {createSlide3()}
        {createSlide4()}
      </Swiper>
    </div>
  );
}
export default TopHome;
