import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Customer, CreateCustomerProfile } from "./routes/index";
import "./styles/index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/customer/:id",
      element: <Customer />,
   },
   {
      path: "/create-customer-profile",
      element: <CreateCustomerProfile />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
