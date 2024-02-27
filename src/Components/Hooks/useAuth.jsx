import { useContext } from "react";
import { UserContext } from "../PrivatePage/AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(UserContext);
  return auth;
};

export default useAuth;
