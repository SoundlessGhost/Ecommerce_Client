import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NotFound from './Components/Pages/404page/notFound';
import Home from './Components/Home/Home/Home';
import Layout from './Layout/Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/",
        element:<Home></Home>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
