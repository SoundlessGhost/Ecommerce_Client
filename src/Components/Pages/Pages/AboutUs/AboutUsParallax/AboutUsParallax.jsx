/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Autoplay } from "swiper/modules";

const AboutUsParallax = () => {
  return (
    <div className="aboutUsSliderContainer h-[400px] items-center ">
      <p className="WhatSaying py-10 text-center">what they’re saying</p>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Parallax, Autoplay, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <p className="w-1/2 mx-auto italic">
            Clouds Come Floating Into My Life, No Longer To Carry Rain Or Usher
            Storm, But To Add Color To My Sunset Sky .You Can't Cross The Sea
            Merely By Standing And Staring At The Water.
          </p>
          <div className="text-center">
            <p className="mt-6">Rabindranath Tagore</p>
            <p className=" text-gray-400 ">Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className="w-1/2 mx-auto italic">
            The Sanskrit Language, Whatever Be Its Antiquity Is Of Wonderful
            Structure, More Perfect Than The Greek, More Copious Than The Latin
            And More Exquisitely Refined Than Either.
          </p>
          <div className="text-center">
            <p className="mt-6">William Jones</p>
            <p className=" text-gray-400 ">Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className="w-1/2 mx-auto italic">
            Love Is Not Only Made For Lovers, It Is Also For Friends Who Love
            Each Other Better Than Lovers. Some People Are Part Of The Story,
            But Not Part Of The Ending .
          </p>
          <div className="text-center">
            <p className="mt-6">Shahed Abid</p>
            <p className=" text-gray-400 ">Designer</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutUsParallax;
