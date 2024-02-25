import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const ProductShowcaseSlider = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lfGVufDB8fDB8fHww"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://plus.unsplash.com/premium_photo-1683121340547-81c499721353?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGdpcmwlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://images.unsplash.com/photo-1512663150964-d8f43c899f76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJveSUyMG1vZGVsfGVufDB8fDB8fHww"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://plus.unsplash.com/premium_photo-1661774206450-eac3c48de2c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://images.unsplash.com/photo-1573496357865-c4c50f4b51f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGdpcmwlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductShowcaseSlider;
