import React from "react";
import { Parallax } from "react-parallax";

const ImgParallax = () => {
  return (
    <>
      <div>
        <div>
          <div className="text-end pr-10 my-10  discountClass">
            <p className=" text-6xl ">30%</p>
            <p className="text-5xl">Shopping Discount</p>
            <button className="bg-black mt-4 rounded-md text-white px-4 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww"
        strength={200}
      >
        <h3 className="imagesText py-[200px]">Designed for the digital market</h3>
      </Parallax>
    </>
  );
};

export default ImgParallax;
