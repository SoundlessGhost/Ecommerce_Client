import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./Components/Pages/404page/notFound";
import Home from "./Components/Home/Home/Home";
import Layout from "./Layout/Layout";
import ShowPerItem from "./Components/Home/ShowPerItem/ShowPerItem";
import ShowPerBlog from "./Components/Home/ShowPerBlog/ShowPerBlog";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
