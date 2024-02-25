/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import "./ShowPerItem.css";
import ItemReactTab from "../ItemReactTab/ItemReactTab";

const ShowPerItem = () => {
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
  } = loadedItem;
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
            <button className="bg-black mt-4 mb-3 rounded-md text-white px-4 py-3">
              add to cart
            </button>
            <p className="mb-3">
              <span>Category:</span> {category}
            </p>
            <p className="mb-3">
              <span>Tag:</span> {tag[0]}, {tag[1]}, {tag[2]}
            </p>
          </div>
        </div>
        <ItemReactTab weight={weight} dimensions={dimensions} sizes={sizes} colors={colors}></ItemReactTab>
      </div>
    </>
  );
};

export default ShowPerItem;
