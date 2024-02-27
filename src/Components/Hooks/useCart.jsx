import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  // const token = localStorage.getItem("accessToken");
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;


//?
// queryFn: async () => {
//   const res = await fetch(
//     `http://localhost:9000/carts?email=${user?.email}`,
//     {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return res.json();
// },
//?
