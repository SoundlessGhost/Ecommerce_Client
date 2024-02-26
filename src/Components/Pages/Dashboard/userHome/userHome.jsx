// import React from 'react';

import { useContext } from "react";
import { UserContext } from "../../../PrivatePage/AuthProvider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>i am home {user?.email}</p>
    </div>
  );
};

export default UserHome;
