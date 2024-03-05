import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProduct = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosSecure("/product");
      return res.data;
    },
  });
  return [product, refetch];
};

export default useProduct;
