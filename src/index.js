import React from "react";
import ReactDOM from "react-dom/client";
//import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  //Link,
} from "react-router-dom";
import Home from "./Pages/Home";
import OrderProduct from "./Pages/OrderProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Bill from "./Pages/Bill";
import UploadFood from "./Pages/UploadFood";
import { StoreProvider } from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order",
    element: <OrderProduct />,
  },
  {
    path: "/logon",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/upload",
    element: <UploadFood />,
  },
  {
    path: "/bill/:numberTable",
    element: <Bill />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
    <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);
