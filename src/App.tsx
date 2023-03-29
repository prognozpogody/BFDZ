import "./App.css";
import { CardQuickviews } from "./Components/card/CardQuickviews";
import { Cart } from "./Components/cart/Cart";
import { FooterProject } from "./Components/footer/Footer";
import { FormAuthorization } from "./Components/formAuthorization/FormAuthorization";
import { HeaderProject } from "./Components/header/Header";
import { ModalPortal } from "./Components/modalPortal/ModalPortal";
import { Button } from "./Components/ui/Button";
import { getModalSelectorAuthorization } from "./Redux/slices/modalSlice";
import { store } from "./Redux/store";
import { useActions } from "./hooks/useActions";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { changeModalAuthorizationState } = useActions();
  const modalAuthorizationOpen = useSelector(getModalSelectorAuthorization);
  const location = useLocation();

  if (store.getState().user.token && location.pathname === "/") {
    return <Navigate to="/products" />;
  }

  return (
    <>
      <ModalPortal isOpen={modalAuthorizationOpen}>
        <FormAuthorization />
        <Button
          variant="primary"
          onClick={() => {
            changeModalAuthorizationState(false);
            navigate("/signup");
          }}
        >
          Зарегестрироваться
        </Button>
      </ModalPortal>
      <Cart />
      <CardQuickviews />

      <HeaderProject />
      <Outlet />
      <FooterProject />
    </>
  );
}

export { App };
