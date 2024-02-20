import React from "react";

const SingleProduct = ({ item }) => {
  const { productName, category, img } = item;
  return (
    <div className="productContainer">
      <img className="h-[367px] w-[305px] rounded-md" src={img} alt="" />
      <div className="mb-8 mt-4 px-2">
        <p>Product Name - {productName}</p>
        <p>Category - {category}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
