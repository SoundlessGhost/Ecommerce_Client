import React from "react";

const SinglePdt = ({ item }) => {
  const { productName, category, img, tag } = item;
  return (
    <div className="productContainer pl-7">
      <img className="h-[367px] w-[305px] rounded-md" src={img} alt="" />
      <div className="mb-8 mt-4 px-2">
        <p>Product Name - {productName}</p>
        <p>Category - {category}</p>
      </div>
    </div>
  );
};

export default SinglePdt;
