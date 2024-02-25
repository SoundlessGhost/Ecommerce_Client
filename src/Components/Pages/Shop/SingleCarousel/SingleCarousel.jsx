/* eslint-disable react/prop-types */
// import React from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const SingleCarousel = ({ product }) => {
  const { _id, img } = product;
  return (
    <div>
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="productContainer  pl-7 pb-10 itemCard">
              <Link to={`/product/${_id}`}>
                <img className="h-[330px] w-[305px] rounded-md" src={img} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="productContainer  pl-7 pb-10 itemCard">
              <Link to={`/product/${_id}`}>
                <img className="h-[330px] w-[305px] rounded-md" src={img} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SingleCarousel;
