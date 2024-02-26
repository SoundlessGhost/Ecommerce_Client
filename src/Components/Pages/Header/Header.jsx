import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../PrivatePage/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Drawer from "../../Home/Drawer/Drawer";
import useCart from "../../Hooks/useCart";
const Header = () => {
  //
  const [cart] = useCart();
  //
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  //
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 800);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handleDropdown dropdown-hover dropdown-end_Function

  const [isHomeOpen, setHomeOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [isShopOpen, setShopOpen] = useState(false);
  const [isBlogsOpen, setBlogsOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    switch (menu) {
      case "Home":
        setHomeOpen(true);
        break;
      case "Pages":
        setPagesOpen(true);
        break;
      case "Shop":
        setShopOpen(true);
        break;
      case "Blogs":
        setBlogsOpen(true);
        break;
      case "Menu":
        setMenuOpen(true);
        break;

      default:
        break;
    }
  };
  const handleMouseLeave = (menu) => {
    switch (menu) {
      case "Home":
        setHomeOpen(false);
        break;
      case "Pages":
        setPagesOpen(false);
        break;
      case "Shop":
        setShopOpen(false);
        break;
      case "Blogs":
        setBlogsOpen(false);
        break;
      case "Menu":
        setMenuOpen(false);
        break;
      default:
        break;
    }
  };

  // Handle LogOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("logout successfully");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="header px-6 pt-4">
          <div className="websiteName">
            <div
              className="header-item"
              onMouseEnter={() => handleMouseEnter("Name")}
              onMouseLeave={() => handleMouseLeave("Name")}
            >
              <p className="py-2 pl-6" onClick={() => navigate("/")}>
                <span className="text-red-900">Snake</span>{" "}
                <span className=" text-cyan-800">Eye</span>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="headerContainer">
            <div
              className="header-item"
              onMouseEnter={() => handleMouseEnter("Home")}
              onMouseLeave={() => handleMouseLeave("Home")}
            >
              <Link to="#">Home</Link>
              {isHomeOpen && (
                <div className="dropdown dropdown-hover dropdown-end">
                  <ul className="py-2   dropdownLink">
                    <p className="pb-px">
                      <Link to="/shop_gallery">Product Gallery</Link>
                    </p>
                    <p className="pb-px ">
                      <Link to="/product_showcase">Product Showcase</Link>
                    </p>
                    <p className="pb-px ">
                      <Link to="/showcase">Uncover product</Link>
                    </p>
                  </ul>
                </div>
              )}
            </div>
            {/*  */}
            <div
              className="header-item ml-10"
              onMouseEnter={() => handleMouseEnter("Pages")}
              onMouseLeave={() => handleMouseLeave("Pages")}
            >
              <Link to="#">Pages</Link>
              {isPagesOpen && (
                <div className="dropdown dropdown-hover dropdown-end">
                  <ul className=" py-2  dropdownLink">
                    <p className="pb-px">
                      <Link to="/about_us">About Us</Link>
                    </p>
                    <p className="pb-px">
                      <Link to="/not_found">404 Page</Link>
                    </p>
                    <p>
                      <Link to="/meet_our_team">Meet Team</Link>
                    </p>
                  </ul>
                </div>
              )}
            </div>
            {/*  */}
            <div
              className="header-item ml-10"
              onMouseEnter={() => handleMouseEnter("Shop")}
              onMouseLeave={() => handleMouseLeave("Shop")}
            >
              <Link to="#">Shop</Link>
              {isShopOpen && (
                <div className="dropdown dropdown-hover dropdown-end">
                  <ul className=" py-2  dropdownLink">
                    <p className="pb-px">
                      <Link to="/shop_carousel">Shop Carousel</Link>
                    </p>
                    <p className="pb-px">
                      <Link to="/on_sale_product">on Sale Product</Link>
                    </p>
                    <p>
                      <Link to="#">Standard Product</Link>
                    </p>
                  </ul>
                </div>
              )}
            </div>
            {/*  */}
            <div
              className="header-item ml-10"
              onMouseEnter={() => handleMouseEnter("Blogs")}
              onMouseLeave={() => handleMouseLeave("Blogs")}
            >
              <Link to="#">Blogs</Link>
              {isBlogsOpen && (
                <div className="dropdown dropdown-hover dropdown-end ">
                  <ul className=" py-2  dropdownLink">
                    <p className="pb-px">
                      <Link to="#">Simple Blogs</Link>
                    </p>
                    <p className="pb-px">
                      <Link to="#">Classic Blogs</Link>
                    </p>
                    <p>
                      <Link to="#">Standard Blogs</Link>
                    </p>
                  </ul>
                </div>
              )}
            </div>
            {/*  */}
            <Link to="dashboard/carts">
              <div className="flex items-center">
                <img
                  className="ml-6 cursor-pointer h-6 w-6 menu-item"
                  src="https://cdn-icons-png.flaticon.com/128/9630/9630118.png"
                  alt=""
                />
                <div className="badge bg-white border-0 text-black mb-3 -ml-2">
                  {cart?.length || 0}
                </div>
              </div>
            </Link>
            {/*  */}
            <div
              className="header-item"
              onMouseEnter={() => handleMouseEnter("Menu")}
              onMouseLeave={() => handleMouseLeave("Menu")}
            >
              <img
                className="ml-4 cursor-pointer h-6 w-6 menu-item"
                src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png"
                alt=""
              />
              {isMenuOpen && (
                <div className="dropdown dropdown-hover dropdown-end ">
                  <ul className=" py-2  dropdownLink pr-3">
                    <p className="pb-px ">
                      <Link to="/dashboard/user_dashboard">User Dashboard</Link>
                    </p>
                    <p className="pb-px ">
                      <Link to="/dashboard/home">My Account</Link>
                    </p>
                    {user ? (
                      <p onClick={handleLogOut}>Log Out</p>
                    ) : (
                      <Link to="/login">Log In</Link>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <Drawer></Drawer>
      </header>
    </>
  );
};

export default Header;
