// import React from 'react';

import Carousel from "../../Home/Carousel/Carousel";
import ProductShowcaseSlider from "./ProductShowcaseSlider/ProductShowcaseSlider";
import Progress from "./Progress/Progress";

const ProductShowcase = () => {
  return (
    <div>
      <ProductShowcaseSlider></ProductShowcaseSlider>
      <Progress></Progress>
      <div>
        <div className="progressParallax bg-fixed px-10">
          <div className="w-1/2">
            <p className="text-white">Hey Welcome 😇 How Are You .</p>
          </div>
        </div>
      </div>
      <Carousel></Carousel>
    </div>
  );
};

export default ProductShowcase;
