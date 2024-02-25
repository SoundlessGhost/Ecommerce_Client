import Header from "../Components/Pages/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Pages/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "../Components/Home/ScrollTop/ScrollTop";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname == "/login" ||
      pathname == "/register" ||
      pathname == "/not_found" ||
      pathname == "/showcase" ? null : (
        <Header></Header>
      )}
      <Outlet></Outlet>
      <ScrollToTopButton></ScrollToTopButton>
      {pathname == "/showcase" || pathname == "/not_found" ? null : (
        <Footer></Footer>
      )}
      <Toaster
        toastOptions={{
          className: "toasterStyle",
          style: {
            border: "1px solid #713200",
            padding: "8px",
            color: "#713200",
          },
        }}
      ></Toaster>
    </div>
  );
};

export default Layout;
