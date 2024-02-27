import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure]=useAxiosSecure()
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("http://localhost:9000/user");
      return res.data;
    },
  });

  const handleAdminBtn = (user) => {
    fetch(`http://localhost:9000/user/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.name} Is An Admin Now`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:9000/user/admin/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "user deleted successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Snake Eye || All User</title>
      </Helmet>

      <div>
        <p className="priceField"> Total User {users.length}</p>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <img
                        onClick={() => handleAdminBtn(user)}
                        className="w-7 cursor-pointer"
                        src="https://cdn-icons-png.flaticon.com/128/11831/11831523.png"
                        alt=""
                      />
                    )}
                  </td>
                  <td>
                    <img
                      onClick={() => handleDeleteBtn(user._id)}
                      className="w-7 cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/128/6460/6460112.png"
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
