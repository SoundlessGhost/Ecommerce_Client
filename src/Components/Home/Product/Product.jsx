import "./Product.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import useProduct from "../../Hooks/useProduct";
const Product = () => {
  const [product] = useProduct();
  return (
    <div>
      <div className="text-center my-12 sellPost">
        <span className="">Don’t wait</span>
        <p className="">Go To Shopping</p>
        <div>
          CALM DOWN TIME WILL ANSWER. EVERYTHING WILL COME TO YOU AT THE{" "}
          <h4>PERFECT TIME</h4>
        </div>
      </div>
      <div className="grid grid-cols-4 px-10">
        {product.slice(0, 8).map((item) => (
          <SingleProduct key={item._id} item={item}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Product;
