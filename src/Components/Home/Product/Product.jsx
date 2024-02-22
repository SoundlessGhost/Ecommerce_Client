import axios from "axios";
import { useState } from "react";
import './Product.css'
import SingleProduct from "../SingleProduct/SingleProduct";
const Product = () => {
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
    <div>
      <div className="text-center my-12 sellPost">
        <span className="">Don’t wait</span>
        <p className="">Go To Shopping</p>
        <div>CALM DOWN TIME WILL ANSWER. EVERYTHING WILL COME TO YOU AT THE <h5>PERFECT TIME</h5></div>
      </div>
      <div className="grid grid-cols-4 px-10"> 
        {
            products.slice(0,8).map(item=><SingleProduct key={item._id} item={item}></SingleProduct>)
        }
      </div>
    </div>
  );
};

export default Product;
