import HeaaderSwiper from "../HeaaderSwiper/HeaaderSwiper";
import Product from "../Product/Product";
import ImgParallax from "../Parallax/Parallax";
import Carousel from "../Carousel/Carousel";
import RelativePdt from "../RelativePdt/RelativePdt";
import Blogs from "../Blogs/Blogs";
import { Helmet } from "react-helmet-async";
// import Drawer from "../Drawer/Drawer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Snake Eye || Home</title>
      </Helmet>
      <HeaaderSwiper></HeaaderSwiper>
      <Product></Product>
      <ImgParallax></ImgParallax>
      <Carousel></Carousel>
      {/* <Drawer></Drawer> */}
      <RelativePdt></RelativePdt>
      <div className="bg_img mt-20 bg-fixed px-10">
        <div className="w-1/2">
          <p>
            Quality In A Product Or Service Is Not What The Supplier Puts In. It
            Is What The Customer Gets Out And Is Willing To Pay For. A Product
            Is Not Quality . It Is Hard To Make And Costs A Lot Of Money,
            As Manufacturers Typically Believe.
          </p>
        </div>
      </div>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
