// import React from 'react';

import { useLoaderData } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../PrivatePage/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";

const ShowPerBlog = () => {
  const [, refetch] = useCart();
  const { user } = useContext(UserContext);
  const loadedBlog = useLoaderData();
  const {
    blogsName,
    authorImg,
    category,
    socialMedia,
    blogsContent,
    date,
    authorDescription,
  } = loadedBlog;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const login_user_photo = user?.photoURL;
    const login_user_displayName = user?.displayName;
    const commentInfo = {
      userComment: comment,
      photo: login_user_photo,
      name: login_user_displayName,
    };
    form.reset();
    fetch("http://localhost:9000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  // comment section

  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(3);
  useEffect(() => {
    const fetchDataAndSetState = () => {
      fetch("http://localhost:9000/comment")
        .then((res) => res.json())
        .then((data) => setComments(data));
    };
    fetchDataAndSetState();

    // Set interval to fetch data every, 2 seconds
    const intervalId = setInterval(() => {
      fetchDataAndSetState();
    }, 2000);

    // Clean up the interval when is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleShowMore = () => {
    setCount(count === 3 ? comments.length : 3);
  };

  return (
    <div className="flex pt-[140px] px-16 justify-between ShowPerBlogsContainer">
      <Helmet>
        <title>Snake Eye || Blogs</title>
      </Helmet>
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
        <span>Leave a Comment</span> <br />
        <form onSubmit={handleCommentSubmit}>
          <textarea
            name="comment"
            required
            placeholder="create your comment"
            className="bg-white rounded-md p-2 border-2 w-[400px] h-[100px] my-4"
            type="text"
          />{" "}
          <br />
          <input
            className="bg-black rounded-md cursor-pointer text-white px-4 py-3"
            type="submit"
            value="Submit"
          />
        </form>
        <hr className="my-4"></hr>
        {/* Comment Section */}
        <div className="mb-10">
          {comments.slice(0, count).map((comment) => (
            <div key={comment._id} className="flex items-center mb-4">
              <div>
                {comment.photo ? (
                  <img
                    src={comment.photo}
                    className=" w-[50px] rounded-full mr-2"
                    alt=""
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                    className=" w-[50px] rounded-full mr-2"
                    alt=""
                  />
                )}
              </div>
              <div>
                <h2 className="font-semibold">
                  {comment.name ? comment.name : "unknown user"}
                </h2>
                <small>
                  {" "}
                  <p className="">{comment.userComment}</p>
                </small>
              </div>
            </div>
          ))}
          <div onClick={handleShowMore} className=" flex justify-center ">
            {count === 3 ? (
              <img
                className="w-7 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
                alt=""
              />
            ) : (
              <img
                className="w-7 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/3106/3106683.png"
                alt=""
              />
            )}
          </div>
        </div>
        {/* Comment Section */}
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
