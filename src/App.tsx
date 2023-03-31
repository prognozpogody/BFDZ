import "./App.css";
import { CardQuickviews } from "./Components/card/CardQuickviews";
import { Cart } from "./Components/cart/Cart";
import { FooterProject } from "./Components/footer/Footer";
import { FormAuthorization } from "./Components/formAuthorization/FormAuthorization";
import { HeaderProject } from "./Components/header/Header";
import { store } from "./Redux/store";
import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

function App() {
  const location = useLocation();

  if (store.getState().user.token && location.pathname === "/") {
    return <Navigate to="/products" />;
  }

  return (
    <>
    {/* модалки порталки */}
      <FormAuthorization />
      <Cart />
      <CardQuickviews />

      <HeaderProject />
      <Outlet />
      <FooterProject />
    </>
  );
}

export { App };
