import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";

const ShopGallery = () => {
  const [product] = useProduct();
  return (
    <div className="grid grid-cols-4 pt-24">
      <Helmet>
        <title>Snake Eye || Shop Gallery</title>
      </Helmet>
      {product.map((item) => (
        <div key={item._id} className="productContainer  pl-7 pb-10 itemCard">
          <Link to={`/product/${item._id}`}>
            <img className="h-[330px] w-[305px] rounded-md" src={item.img} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopGallery;
