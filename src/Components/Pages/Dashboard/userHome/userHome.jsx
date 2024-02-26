// import React from 'react';

import { useContext } from "react";
import { UserContext } from "../../../PrivatePage/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Helmet>
        <title>Snake Eye || User Home</title>
      </Helmet>
      <p>i am home {user?.email}</p>
    </div>
  );
};

export default UserHome;
