import axios from "axios";
import React, { useState } from "react";

const CopyComponents = () => {
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
    <div className="grid grid-cols-2">
      <div>some text here</div>
      {products.slice(12, 17).map((item) => (
        <div>
          <div className="productContainer grid grid-cols-2">
            <div>
              <img className="rounded-md" src={item.img} alt="" />
              <div className="mb-8 mt-4 px-2">
                <p>Product Name - {item.productName}</p>
                <p>Category - {item.category}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CopyComponents;
