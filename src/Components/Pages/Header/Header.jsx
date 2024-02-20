import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div>
        <div className="headerContainer fixed z-10 px-11 pt-8">
          <div>
            <Link to="/" className="websiteName cursor-pointer">
              Snake Eye
            </Link>
          </div>
          <div className="AnchorContainer ml-[840px]">
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="mr-8 cursor-pointer">
                Home
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dropDownContainer z-[1] menu shadow rounded-box w-52"
              >
                <li>
                  <Link to="#">Metro Shop</Link>
                </li>
                <li>
                  <Link to="#">Animated Shop</Link>
                </li>
                <li>
                  <Link to="#">Product Showcase</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="mr-8 cursor-pointer">
                Pages
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dropDownContainer z-[1] menu rounded-box w-52"
              >
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Meet The Team</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Our Gift Voucher</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="mr-8 cursor-pointer">
                Shop
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dropDownContainer z-[1] menu rounded-box w-52"
              >
                <li>
                  <Link to="#">User Dashboard</Link>
                </li>
                <li>
                  <Link to="#">My Account</Link>
                </li>
                <li>
                  <Link to="#">Carts</Link>
                </li>
                <li>
                  <Link to="#">Checkout</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="mr-8 cursor-pointer">
                Blog
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dropDownContainer z-[1] menu rounded-box w-52"
              >
                <li>
                  <Link to="#">Standard Blogs</Link>
                </li>
                <li>
                  <Link to="#">Classic Blogs</Link>
                </li>
                <li>
                  <Link to="#">Simple Blogs</Link>
                </li>
                <li>
                  <Link to="#">Post Types</Link>
                </li>
              </ul>
            </div>
            <img
              className="h-8 cursor-pointer w-8"
              src="https://cdn-icons-png.flaticon.com/128/10485/10485973.png"
              alt=""
            />
            <img
              className="ml-6 cursor-pointer h-6 w-6"
              src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
