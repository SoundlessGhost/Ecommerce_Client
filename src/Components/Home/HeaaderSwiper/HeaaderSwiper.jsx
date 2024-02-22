import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const HeaaderSwiper = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[820px] w-[1440px]"
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
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
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaaderSwiper;
