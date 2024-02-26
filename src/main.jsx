import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./Components/Pages/404page/notFound";
import Home from "./Components/Home/Home/Home";
import Layout from "./Layout/Layout";
import ShowPerItem from "./Components/Home/ShowPerItem/ShowPerItem";
import ShowPerBlog from "./Components/Home/ShowPerBlog/ShowPerBlog";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import AuthProvider from "./Components/PrivatePage/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/PrivatePage/PrivateRoute/PrivateRoute";
import UserDashboard from "./Components/Pages/UserDashbord/UserDashbord";
import Showcase from "./Components/Pages/Showcase/Showcase";
import ProductShowcase from "./Components/Pages/ProductShowcase/ProductShowcase";
import ShopGallery from "./Components/Pages/ShopGallery/ShopGallery";
import AboutUs from "./Components/Pages/Pages/AboutUs/AboutUs";
import MeetOurTeam from "./Components/Pages/Pages/MeetOurTeam/MeetOurTeam";
import ShopCarousel from "./Components/Pages/Shop/ShopCarousel/ShopCarousel";
import OnSaleProduct from "./Components/Pages/Shop/OnSaleProduct/OnSaleProduct";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import UserHome from "./Components/Pages/Dashboard/userHome/userHome";
import UserCart from "./Components/Pages/Dashboard/userCart/userCart";
import Payment from "./Components/Pages/Dashboard/Payment/Payment";
import PaymentHistory from "./Components/Pages/Dashboard/PaymentHistory/PaymentHistory";
import AllUsers from "./Components/Pages/Dashboard/Admin/AllUsers/AllUsers";
import ManageAllProduct from "./Components/Pages/Dashboard/Admin/ManageAllproduct/ManageAllproduct";
import AddItem from "./Components/Pages/Dashboard/Admin/AddItem/AddItem";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product/:id",
        element: <ShowPerItem></ShowPerItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/product/${params.id}`),
      },
      {
        path: "/blog/:id",
        element: <ShowPerBlog></ShowPerBlog>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/blogs/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/showcase",
        element: <Showcase></Showcase>,
      },
      {
        path: "/product_showcase",
        element: <ProductShowcase></ProductShowcase>,
      },
      {
        path: "/shop_gallery",
        element: <ShopGallery></ShopGallery>,
      },
      {
        path: "/about_us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/not_found",
        element: <NotFound></NotFound>,
      },
      {
        path: "/meet_our_team",
        element: <MeetOurTeam></MeetOurTeam>,
      },
      {
        path: "/shop_carousel",
        element: <ShopCarousel></ShopCarousel>,
      },
      {
        path: "/on_sale_product",
        element: <OnSaleProduct></OnSaleProduct>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "user_dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard></UserDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "home",
        element: <UserHome></UserHome>,
      },
      {
        path: "carts",
        element: (
          <PrivateRoute>
            <UserCart></UserCart>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "payment_history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "all_user",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "add_item",
        element: <AddItem></AddItem>,
      },
      {
        path: "manage_all_product",
        element: <ManageAllProduct></ManageAllProduct>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>
    </HelmetProvider>
  </AuthProvider>
);
