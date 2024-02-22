/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  const { productName, category, img, _id } = item;
  return (
    <div className="productContainer">
      <Link to={`/product/${_id}`}>
        <img
          className="h-[367px] w-[305px] cursor-pointer rounded-md"
          src={img}
          alt=""
        />
      </Link>
      <div className="mb-8 mt-4 px-2">
        <p>Product Name - {productName}</p>
        <p>Category - {category}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
