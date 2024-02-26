import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10">
          {/* Page content here */}
          <div className="mb-10 priceField flex">
            <img
              className="w-5 mr-2"
              src="https://cdn-icons-png.flaticon.com/128/545/545680.png"
              alt=""
            />
            <Link to="/">Go to Home Page</Link>
          </div>
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full  bg-gray-800  pt-10 font-semibold text-white">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/home">
                <div className="flex ">
                  <img
                    className="w-[20px] mr-1"
                    src="https://cdn-icons-png.flaticon.com/128/9187/9187555.png"
                  />
                  <p>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/payment">
                <div className="flex ">
                  <img
                    className="w-[20px] mr-1"
                    src="https://cdn-icons-png.flaticon.com/128/9331/9331485.png"
                  />
                  <p>Payment</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="payment_history">
                <div className="flex ">
                  <img
                    className="w-[20px] mr-1"
                    src="https://cdn-icons-png.flaticon.com/128/3621/3621029.png"
                  />
                  <p>Payment History</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/carts">
                <div className="flex ">
                  <img
                    className="w-[20px] mr-1"
                    src="https://cdn-icons-png.flaticon.com/128/5575/5575882.png"
                  />
                  <p>My Product</p>
                </div>
              </Link>
            </li>
            <div className="divider"></div>
            {/* divider */}
            <li>
              <Link to="/">
                <div className="flex ">
                  <img
                    className="w-[20px] mr-1"
                    src="https://cdn-icons-png.flaticon.com/128/10263/10263405.png"
                  />
                  <p>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/shop_gallery">
                <div className="flex ">
                  <img
                    className="w-[20px] mr-1"
                    src="https://cdn-icons-png.flaticon.com/128/10856/10856545.png"
                  />
                  <p>Shop</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="flex ">
                  <img
                    className="w-[20px] mr-1"
                    src="https://cdn-icons-png.flaticon.com/128/552/552489.png"
                  />
                  <p>Contact</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
