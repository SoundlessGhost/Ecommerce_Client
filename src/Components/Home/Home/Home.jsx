import React from "react";
import HeaaderSwiper from "../HeaaderSwiper/HeaaderSwiper";
import Product from "../Product/Product";
import ImgParallax from "../Parallax/Parallax";
import Carousel from "../Carousel/Carousel";
import RelativePdt from "../RelativePdt/RelativePdt";
import Footer from "../../Pages/Footer/Footer";
import Blogs from "../Blogs/Blogs";
import CopyComponents from "../CopyComponents/CopyComponents";

const Home = () => {
  return (
    <div>
      <HeaaderSwiper></HeaaderSwiper>
      <Product></Product>
      <ImgParallax></ImgParallax>
      <Carousel></Carousel>
      <RelativePdt></RelativePdt>
      <div className="bg_img mt-20 bg-fixed px-10">
        <div className="w-1/2">
          <p>
          Quality In A Product Or Service Is Not What The Supplier Puts In. It Is What The Customer Gets Out And Is Willing To Pay For. A Product Is Not Quality Because It Is Hard To Make And Costs A Lot Of Money, As Manufacturers Typically Believe.
          </p>
          <button className="border-0 border-b-4">See More</button>
        </div>
      </div>
      {/* <CopyComponents></CopyComponents> */}
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
