import axios from "axios";
import React, { useState } from "react";
import SinglePdt from "../SinglePdt/SinglePdt";

const RelativePdt = () => {
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
    <div className="grid grid-cols-4">
      {products.slice(8, 12).map((item) => (
        <SinglePdt item={item}></SinglePdt>
      ))}
    </div>
  );
};

export default RelativePdt;