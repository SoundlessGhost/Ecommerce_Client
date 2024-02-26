import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../PrivatePage/AuthProvider/AuthProvider";

const useCart = () => {
  const { user } = useContext(UserContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:9000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;
