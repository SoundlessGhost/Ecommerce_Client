// import React from 'react';

import axios from "axios";
import { useState } from "react";
import useCart from "../../../../Hooks/useCart";
import Swal from "sweetalert2";

const ManageAllProduct = () => {
  const [, refetch] = useCart();
  const [products, setProducts] = useState([]);
  axios
    .get("http://localhost:9000/product")
    .then((data) => setProducts(data.data));

  const handleDeleteMethod = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          });
      }
    });
  };

  //   TODO update handler
  const handleUpdate = (id) => {
    console.log(id);
  };
  return (
    <div>
      <p className="priceField">Manage All Product {products.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image & Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={item._id}>
                <td className="priceField">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.productName}</div>
                      <div className="text-sm opacity-50 priceField">
                        Category - {item.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <small>
                      <p className="priceField">$ {item.price}</p>
                    </small>
                  </div>
                </td>
                <td className="priceField">
                  <small>Color - {item.colors}</small> <br />
                  <small>Dimensions - {item.dimensions}</small>
                  <br />
                  <small>Quantity - {item.availableQuantity} Pieces</small>
                </td>
                <td>
                  <img
                    onClick={() => handleUpdate(item._id)}
                    className="w-[20px] cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/2546/2546705.png"
                    alt=""
                  />
                </td>
                <td>
                  <img
                    onClick={() => handleDeleteMethod(item._id)}
                    className="w-[20px] cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/190/190406.png"
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllProduct;
