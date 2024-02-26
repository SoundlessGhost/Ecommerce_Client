// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Showcase.css";
import { Autoplay, Navigation,EffectCards } from "swiper/modules";
import { Helmet } from "react-helmet-async";
const Showcase = () => {
  return (
    <>
    <Helmet>
        <title>Snake Eye || Uncover Showcase</title>
      </Helmet>
      <div className="showcaseContainer">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          loop={true}
          modules={[Navigation,EffectCards, Autoplay]}
          effect={'cards'}
          grabCursor={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1465145782865-09532f760e6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYXV0aWZ5dWwlMjBnaXJsfGVufDB8fDB8fHww" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1503830232159-4b417691001e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJlYXV0aWZ5dWwlMjBnaXJsfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1465145498025-928c7a71cab9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYXV0aWZ5dWwlMjBnaXJsfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1464961968964-a80a9b51f3d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlYXV0aWZ5dWwlMjBnaXJsfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1466314760659-7a0975a51304?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdCUyMGJpa2luaXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ5dWwlMjBnaXJsfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnl1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0aWZ5dWwlMjBnaXJsfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1445384763658-0400939829cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYXV0aWZ5dWwlMjBnaXJsfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Showcase;
