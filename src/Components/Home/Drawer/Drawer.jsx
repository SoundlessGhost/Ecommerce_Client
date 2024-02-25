// import React from 'react';
import "./Drawer.css";
const Drawer = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button top-[300px] absolute -right-4"
          >
            <div className="drawerHover">
              <img
                className="w-[35px] "
                src="https://cdn-icons-png.flaticon.com/128/6461/6461986.png"
                alt=""
              />
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
            {/* Sidebar content here */}
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
