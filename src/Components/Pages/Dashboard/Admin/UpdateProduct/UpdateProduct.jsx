import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const navigate = useNavigate()
  const { handleSubmit, register } = useForm();
  //   default value
  const product = useLoaderData();
  const {
    _id,
    productName,
    price,
    availableQuantity,
    rating,
    category,
    dimensions,
    weight,
    img,
    additionalImages,
  } = product;

  //   handle submit
  const onSubmit = (data) => {
    const {
      productName,
      price,
      availableQuantity,
      rating,
      category,
      dimensions,
      color,
      weight,
      Additional1,
      Additional2,
      Additional3,
      img,
    } = data;
    const updateProduct = {
      productName,
      price,
      availableQuantity,
      rating,
      category,
      dimensions,
      colors: [color],
      weight,
      img,
      additionalImages: [Additional1, Additional2, Additional3],
    };
    fetch(`http://localhost:9000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate('/dashboard/manage_all_product')
      });
  };
  //
  return (
    <div>
      <div className="FormStyle">
        <h5 className="formHeader">Update Product</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        defaultValue={productName}
                        {...register("productName", { required: true })}
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
                        defaultValue={price}
                        {...register("price", { required: true })}
                        placeholder="Price"
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
                        defaultValue={availableQuantity}
                        {...register("availableQuantity", { required: true })}
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
                        defaultValue={rating}
                        {...register("rating", { required: true })}
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
                        defaultValue={category}
                        {...register("category", { required: true })}
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
                        defaultValue={dimensions}
                        {...register("dimensions", { required: true })}
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
                        {...register("color", { required: true })}
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
                        defaultValue={weight}
                        {...register("weight", { required: true })}
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
                        defaultValue={img}
                        {...register("img", { required: true })}
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
                        defaultValue={additionalImages[0]}
                        {...register("Additional1", { required: true })}
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
                        defaultValue={additionalImages[1]}
                        {...register("Additional2", { required: true })}
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
                        defaultValue={additionalImages[2]}
                        {...register("Additional3", { required: true })}
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
                value="Update Product"
                className="rounded-md cursor-pointer bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
