import { useContext } from "react";
import { UserContext } from "../../PrivatePage/AuthProvider/AuthProvider";
import DashboardAreaChart from "./AreaChart/AreaChart";
import PieChart from "./PieChart/PieChart";

const UserDashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between pt-36 px-10">
      <div className="">
        <p className="h-[200px]"> Total Balance</p>
        <PieChart></PieChart>
      </div>
      <div className="">
        <div className="card w-[470px] h-[200px] ml-16 bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Details</h2>
            <div className="flex">
              <p>Oder Item</p>
              <p>Total Cost</p>{" "}
            </div>
          </div>
        </div>
        <DashboardAreaChart></DashboardAreaChart>
      </div>
      <div className="">
        <img className=" rounded-full" src={user?.photoURL} alt="" />
        <p className="pl-2">{user?.displayName}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
