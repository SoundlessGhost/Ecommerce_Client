import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ShopCarousel = () => {
  const [products, setProducts] = useState([]);
  axios
    .get("http://localhost:9000/product")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
    <Helmet>
        <title>Snake Eye || Shop Carousel</title>
      </Helmet>
      <div className="pt-32 pb-24">
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
              {products.slice(12, 13).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(13, 14).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(14, 15).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(15, 16).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(16, 17).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(17, 18).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(18, 19).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(19, 20).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(1, 2).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(2, 3).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {products.slice(3, 4).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 3000,
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
            <div className="pt-12">
              {products.slice(20, 21).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(21, 22).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(22, 23).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(23, 24).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(5, 6).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(6, 7).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(7, 8).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(8, 9).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(9, 10).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(10, 11).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(11, 12).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-12">
              {products.slice(12, 13).map((item) => (
                <div
                  key={item._id}
                  className="productContainer  pl-7 pb-10 itemCard"
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="h-[330px] w-[305px] rounded-md"
                      src={item.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ShopCarousel;
