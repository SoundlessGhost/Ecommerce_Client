/* eslint-disable react/prop-types */
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import "./ShowPerItem.css";
import ItemReactTab from "../ItemReactTab/ItemReactTab";
import { useContext } from "react";
import { UserContext } from "../../PrivatePage/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const ShowPerItem = () => {
  //
  const [, refetch] = useCart();
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  //
  const loadedItem = useLoaderData();
  const {
    productName,
    additionalImages,
    availableQuantity,
    description,
    rating,
    img,
    price,
    category,
    tag,
    weight,
    dimensions,
    colors,
    sizes,
    _id,
  } = loadedItem;
  //
  const handleAddToCart = () => {
    const orderInfo = {
      productId: _id,
      productInfo: loadedItem,
      email: user?.email,
    };
    if (user && user.email) {
      fetch("http://localhost:9000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast("product add successfully");
          }
        });
    } else {
      navigate("/login", { state: { from: location } });
      toast("please login order to product");
    }
  };
  return (
    <>
      <div className="pt-40 pb-20">
        <div className="flex">
          <div className="smallImg">
            <img
              className="h-[162px] w-[140px] ml-16  rounded-md"
              src={additionalImages[0]}
              alt=""
            />
            <img
              className="h-[162px] w-[140px] ml-16 rounded-md"
              src={additionalImages[1]}
              alt=""
            />
            <img
              className="h-[162px] w-[140px] ml-16  rounded-md"
              src={additionalImages[2]}
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md h-[530px] mx-10 w-[600px]"
              src={img}
              alt=""
            />
          </div>
          <div className="w-[400px] ShowPerItemDetails">
            <h2 className="mb-3">{productName}</h2>
            <p className="mb-3">
              <span>Price:</span> ${price}{" "}
            </p>
            <p className="mb-3">
              <span>Available Quantity: </span>
              {availableQuantity} Piece
            </p>
            <p className="mb-3">
              <span>Description:</span> {description}
            </p>
            <p className="mb-3">
              <span>Rating:</span> {rating}
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-black mt-4 mb-3 rounded-md text-white px-4 py-3"
            >
              add to cart
            </button>
            <p className="mb-3">
              <span>Category:</span> {category}
            </p>
            {tag ? (
              <p className="mb-3">
                <span>Tag:</span> {tag[0]}, {tag[1]}, {tag[2]}
              </p>
            ) : null}
          </div>
        </div>
        <ItemReactTab
          weight={weight}
          dimensions={dimensions}
          sizes={sizes}
          colors={colors}
        ></ItemReactTab>
      </div>
    </>
  );
};

export default ShowPerItem;
