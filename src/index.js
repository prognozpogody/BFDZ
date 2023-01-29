import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./Components/Context/Context";
import SignUp from "./Components/pages/SignUp";
import ProductPage from "./Components/Content/ProductPage";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import UserPage from "./Components/pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "ProductPage",
        element: <ProductPage />,
      },
      {
        path: "FormAuthorization",
        element: <FormAuthorization />,
      },
      {
        path: "UserPage",
        element: <UserPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
