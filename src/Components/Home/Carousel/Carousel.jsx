import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[480px] text-center w-[1440px] pt-[120px] pb-[240px]  bg-slate-100 my-20">
      <p className="WhatSaying mb-16">what they’re saying</p>
      <div className="swiperStyle">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <p className="w-1/2 mx-auto italic">
          Clouds Come Floating Into My Life, No Longer To Carry Rain Or Usher Storm, But To Add Color To My Sunset Sky .You Can't Cross The Sea Merely By Standing And Staring At The Water.
          </p>
          <p className="mt-6">Rabindranath Tagore</p>
          <p className=" text-gray-400 ">Designer</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="w-1/2 mx-auto italic">
          The Sanskrit Language, Whatever Be Its Antiquity Is Of Wonderful Structure, More Perfect Than The Greek, More Copious Than The Latin And More Exquisitely Refined Than Either.
          </p>
          <p className="mt-6">William Jones</p>
          <p className=" text-gray-400 ">Designer</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="w-1/2 mx-auto italic">
            Love Is Not Only Made For Lovers, It Is Also For Friends Who Love
            Each Other Better Than Lovers. Some People Are Part Of The Story, But Not Part Of The Ending .
          </p>
          <p className="mt-6">Shahed Abid</p>
          <p className=" text-gray-400 ">Designer</p>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
