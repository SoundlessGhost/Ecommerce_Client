// import React from 'react';

import { Helmet } from "react-helmet-async";
import Progress from "../../ProductShowcase/Progress/Progress";
import AboutUsParallax from "./AboutUsParallax/AboutUsParallax";

const AboutUs = () => {
  return (
    <div>
        <Helmet>
            <title>Snake Eye || About</title>
        </Helmet>
      <div className="about-us bg-fixed">
        <div>
          <p className="text-center">About US</p>
        </div>
      </div>
      <div className="flex justify-between px-10 pt-10 classAboutContainer">
        <div>
          <img
            className="w-[400px] h-[250px] rounded-md"
            src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaG9vbCUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h2 className="py-4 pl-2 font-semibold">Strategy and Timing</h2>
          <p className="px-3 w-[350px]">
            Dhaka Stock Exchange (DSE) Fundamental & Technical Analysis Tools
            for Bangladesh. Bazar Trading Tools.
          </p>
        </div>
        <div>
          <img
            className="w-[400px] h-[250px] rounded-md"
            src="https://media.istockphoto.com/id/1932179218/photo/set-of-childrens-winter-clothes-top-view-advertising-concept-style-and-fashion.webp?b=1&s=170667a&w=0&k=20&c=3iw5Kws06r7SBbB7Hl8o_k445l7I4V1wg0YCmn5T8VE="
            alt=""
          />
          <h2 className="py-4 pl-2 font-semibold">Social Integration</h2>
          <p className="px-3 w-[350px]">
            The easy way, or the hard way – either way, you need to make sure
            that your product is a composition of systems.
          </p>
        </div>
        <div>
          <img
            className="w-[400px] h-[250px] rounded-md"
            src="https://plus.unsplash.com/premium_photo-1663127330677-8d15656d6c39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h2 className="py-4 pl-2 font-semibold">Shopping Experience</h2>
          <p className="px-3 w-[350px]">
            A market is defined as the sum total of all the buyers and sellers
            in the area or region under consideration.
          </p>
        </div>
      </div>
      <Progress></Progress>
      <div className="pt-10">
        <AboutUsParallax></AboutUsParallax>
      </div>
    </div>
  );
};

export default AboutUs;
