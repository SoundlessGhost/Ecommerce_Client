import axios from "axios";
import { useState } from "react";
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
        {products.slice(12, 24).map((item) => (
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
