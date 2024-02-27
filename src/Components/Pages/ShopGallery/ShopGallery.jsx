import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ShopGallery = () => {
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
    <div className="grid grid-cols-4 pt-24">
      <Helmet>
        <title>Snake Eye || Shop Gallery</title>
      </Helmet>
        {products.map((item) => (
          <div key={item._id} className="productContainer  pl-7 pb-10 itemCard">
            <Link to={`/product/${item._id}`}>
              <img
                className="h-[330px] w-[305px] rounded-md"
                src={item.img}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ShopGallery;
