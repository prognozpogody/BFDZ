import "./App.css";
import { CardQuickviews } from "./components/CardQuickviews/CardQuickviews";
import { Cart } from "./components/Cart/Cart";
import { FooterProject } from "./components/Footer/Footer";
import { FormAuthorization } from "./components/FormAuthorization/FormAuthorization";
import { HeaderProject } from "./components/Header/Header";
import { store } from "./redux/store";
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
