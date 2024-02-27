import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UserCart = () => {
  const [cart, refetch] = useCart([]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.productInfo.price,
    0
  );

  //   HandleDeleteMethod
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
        fetch(`http://localhost:9000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
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
  return (
    <div>
      <Helmet>
        <title>Snake Eye || My Product</title>
      </Helmet>
      <div className="flex justify-between items-center mb-5 priceField">
        <p className="">Total Order : {cart.length} Pieces</p>
        <p>Total Price : $ {totalPrice.toFixed(2)}</p>
        <Link to="/dashboard/payment">
          <p className="btn">Pay</p>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Image & Name</th>
                <th>Price</th>
                <th>Available</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td className="priceField">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.productInfo.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item.productInfo.productName}
                        </div>
                        <div className="text-sm opacity-50 priceField">
                          Category - {item.productInfo.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <small>
                        <p className="priceField">$ {item.productInfo.price}</p>
                      </small>
                    </div>
                  </td>
                  <td className="priceField">
                    <small>Color - {item.productInfo.colors[0]}</small> <br />
                    <small>Dimensions - {item.productInfo.dimensions}</small>
                    <br />
                    <small>
                      Quantity - {item.productInfo.availableQuantity} Pieces
                    </small>
                  </td>
                  <th>
                    <img
                      onClick={() => handleDeleteMethod(item._id)}
                      className="w-[20px] cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/128/190/190406.png"
                      alt=""
                    />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
