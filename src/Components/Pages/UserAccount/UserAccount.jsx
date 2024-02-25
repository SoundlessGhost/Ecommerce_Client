import  { useContext } from 'react';
import './UserAccount.css'
import { UserContext } from "../../PrivatePage/AuthProvider/AuthProvider";
const UserAccount = () => {

  const { user } = useContext(UserContext);
    return (
        <div>
            <p>user account = {user?.email}</p>
        </div>
    );
};

export default UserAccount;