// import React from 'react';

import Swal from "sweetalert2";
import "./AddItem.css";
const AddItem = () => {
  const addHandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const ProductName = form.ProductName.value;
    const Price = form.Price.value;
    const AvailableQuantity = form.Available.value;
    const rating = form.Rating.value;
    const CategoryName = form.Category.value;
    const dimensions = form.Dimensions.value;
    const color = form.Color.value;
    const weight = form.Weight.value;
    const PhotoURl = form.PhotoURl.value;
    const Additional1 = form.PhotoURl1.value;
    const Additional2 = form.PhotoURl2.value;
    const Additional3 = form.PhotoURl3.value;
    const NewProduct = {
      productName: ProductName,
      price: Price,
      quantity: AvailableQuantity,
      rating,
      category: CategoryName,
      dimensions,
      color: [color],
      weight,
      additionalImages: [Additional1, Additional2, Additional3],
      img: PhotoURl,
    };

    fetch("http://localhost:9000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NewProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="FormStyle">
        <h5 className="formHeader">Add New Product</h5>
        <form onSubmit={addHandleSubmit}>
          <div>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Product Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="ProductName"
                        placeholder="Product Name"
                        className="block w-full rounded-md border-0 p-1.5  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Price
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Price"
                        name="Price"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Available Quantity
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Available"
                        placeholder="Product Quantity"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Rating
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Rating"
                        placeholder="Rating"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Category
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Category"
                        placeholder="Product Category"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Dimensions
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Dimensions"
                        placeholder="Dimensions"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Color
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Color"
                        placeholder="Product Color"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Weight
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Weight"
                        placeholder="Weight "
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Main Photo URl
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="PhotoURl"
                        placeholder="Enter Photo URl"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Additional Photo URl
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="PhotoURl1"
                        placeholder="Enter Photo URl"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Additional Photo URl
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="PhotoURl2"
                        placeholder="Enter Photo URl"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Additional Photo URl
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="PhotoURl3"
                        placeholder="Enter Photo URl"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <input
                type="submit"
                value="Add Product"
                className="rounded-md cursor-pointer bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
