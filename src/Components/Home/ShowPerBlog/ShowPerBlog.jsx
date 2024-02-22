// import React from 'react';

import { useLoaderData } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const ShowPerBlog = () => {
  const loadedBlog = useLoaderData();
  const {
    // authorName,
    blogsName,
    authorImg,
    category,
    socialMedia,
    blogsContent,
    date,
    authorDescription,
  } = loadedBlog;
  return (
    <div className="flex pt-[140px] px-16 justify-between ShowPerBlogsContainer">
      <div className="w-[950px] mr-10">
        {/* Slider Start */}
        <div className="mb-4">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFkeXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1483726234545-481d6e880fc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95fGVufDB8fDB8fHww"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwYW5kJTIwZ2lybCUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveSUyMGFuZCUyMGdpcmwlMjBwbGF5aW5nfGVufDB8fDB8fHww"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1495837174058-628aafc7d610?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJveSUyMGFuZCUyMGdpcmwlMjBwbGF5aW5nfGVufDB8fDB8fHww"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://plus.unsplash.com/premium_photo-1682577799641-adbe26a94623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95JTIwYW5kJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className="h-[550px] rounded-md w-[950px]"
                src="https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveSUyMGFuZCUyMGdpcmwlMjBwbGF5aW5nfGVufDB8fDB8fHww"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Slider End */}
        <span>{blogsName}</span>
        <p className="AuthorDate my-2">{date}</p>
        <p className="my-4">{authorDescription}</p>
        <div className="flex mb-4">
          <img
            className="w-[450px] mr-10 h-[300px] rounded-md "
            src="https://images.unsplash.com/photo-1508896694512-1eade558679c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />

          <img
            className="w-[450px] h-[300px] rounded-md "
            src="https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95fGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <h3 className="ShowPdtDetails">
          The essence of positioning is sacrifice. You must be willing to give
          up something in order to establish that unique position.
        </h3>
        <p className="my-4">{authorDescription.slice(52, 650)}</p>
        <h3 className="warAndMarket">
          war and marketing have many similarities.
        </h3>
        <p className="my-4">{authorDescription.slice(103, 446)}.</p>
        {/* TODO */}
        <span>Leave a Comment</span> <br />
        <textarea
          placeholder="your comment"
          className="bg-white rounded-md placeholder:pl-4  placeholder:pt-4 border-2 w-[500px] h-[200px] my-4"
          type="text"
        /> <br />
        <input
          className="bg-black mb-4 rounded-md text-white px-4 py-3"
          type="submit"
          value="Submit"
        />
      </div>
      <div className="w-[300px] ml-10">
        <span>About Author</span>
        <img className="rounded-md my-6" src={authorImg} alt="" />
        <p className="mb-4">{blogsContent}</p>
        <span>Category</span>
        <p className="mt-4 cursor-pointer mb-px">{category[0]}</p>
        <p className="cursor-pointer mb-px">{category[1]}</p>
        <p className="cursor-pointer mb-px">{category[2]}</p>
        <p className="cursor-pointer mb-px">{category[3]}</p>
        <p className="mb-4 cursor-pointer">{category[4]}</p>
        <span>Social Media</span>
        <p className="mt-4 cursor-pointer mb-px">{socialMedia[0]}</p>
        <p className="cursor-pointer mb-px">{socialMedia[1]}</p>
        <p className="cursor-pointer mb-px">{socialMedia[2]}</p>
      </div>
    </div>
  );
};

export default ShowPerBlog;
