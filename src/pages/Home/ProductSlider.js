import React, { useState } from "react";
import "./ProductSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./Component/ProductCard";

//import images
import img1 from "./Assets/Product 1.jpg";
import img2 from "./Assets/Product 2.jpg";
import img3 from "./Assets/Product 3.jpg";
import img4 from "./Assets/Product 4.jpg";
import img5 from "./Assets/Product 5.jpg";
import img6 from "./Assets/Product 6.jpg";

const ProductSlider = () => {
  return (
    <div className="product-slider-container">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        navigation={true}
        breakpoints={{
          720: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          993: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img1 }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img2 }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img3 }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img4 }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img6 }} />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};
export default ProductSlider;
