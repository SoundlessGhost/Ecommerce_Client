import ItemReactTab from "../../../Home/ItemReactTab/ItemReactTab";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useProduct from "../../../Hooks/useProduct";

const OnSaleProduct = () => {
  const [product] = useProduct();

  return (
    <>
      <Helmet>
        <title>Snake Eye || On Sale Product</title>
      </Helmet>
      {product.slice(25, 26).map((product) => (
        <div key={product._id} className="pt-40 pb-20">
          <div className="flex">
            <div className="smallImg">
              <img
                className="h-[162px] w-[140px] ml-16  rounded-md"
                src={product.additionalImages[0]}
                alt=""
              />
              <img
                className="h-[162px] w-[140px] ml-16 rounded-md"
                src={product.additionalImages[1]}
                alt=""
              />
              <img
                className="h-[162px] w-[140px] ml-16  rounded-md"
                src={product.additionalImages[2]}
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-md h-[530px] mx-10 w-[600px]"
                src={product.img}
                alt=""
              />
            </div>
            <div className="w-[400px] ShowPerItemDetails">
              <h2 className="mb-3">{product.productName}</h2>
              <p className="mb-3">
                <span>Price:</span> ${product.price}{" "}
              </p>
              <p className="mb-3">
                <span>Available Quantity: </span>
                {product.availableQuantity} Piece
              </p>
              <p className="mb-3">
                <span>Description:</span> {product.description}
              </p>
              <p className="mb-3">
                <span>Rating:</span> {product.rating}
              </p>
              <button className="bg-black mt-4 mb-3 rounded-md text-white px-4 py-3">
                add to cart
              </button>
              <p className="mb-3">
                <span>Category:</span> {product.category}
              </p>
              <p className="mb-3">
                <span>Tag:</span> {product.tag[0]}, {product.tag[1]},{" "}
                {product.tag[2]}
              </p>
            </div>
          </div>
          <ItemReactTab
            weight={product.weight}
            dimensions={product.dimensions}
            sizes={product.sizes}
            colors={product.colors}
          ></ItemReactTab>
        </div>
      ))}
      <div className="grid grid-cols-4">
        {product.slice(10, 14).map((item) => (
          <div key={item._id} className="productContainer pl-7">
            <Link to={`/product/${item._id}`}>
              <img
                className="h-[330px] w-[305px] rounded-md"
                src={item.img}
                alt=""
              />
            </Link>
            <div className="mb-8 mt-4 px-2">
              <p>Product Name - {item.productName}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnSaleProduct;
