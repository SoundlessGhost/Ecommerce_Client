import SinglePdt from "../SinglePdt/SinglePdt";
import useProduct from "../../Hooks/useProduct";

const RelativePdt = () => {
  const [product] = useProduct();
  return (
    <div className="grid grid-cols-4">
      {product.slice(8, 12).map((item) => (
        <SinglePdt key={item._id} item={item}></SinglePdt>
      ))}
    </div>
  );
};

export default RelativePdt;
