import "./App.css";
import { FooterProject } from "./Components/footer/Footer";
import { FormAuthorization } from "./Components/formAuthorization/FormAuthorization";
import { HeaderProject } from "./Components/header/Header";
import { ModalPortal } from "./Components/modalPortal/ModalPortal";
import { useActions } from "./hooks/useActions";
import { Button } from "./Components/ui/Button";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { changeModalState } = useActions();
  const modalOpen = useSelector(
    (state: { modalOpen: boolean }) => state.modalOpen
  );

  const location = useLocation();

  const TOKEN = localStorage.getItem("token");

  if (TOKEN && location.pathname === "/") {
    return <Navigate to="/products" />;
  }

  return (
    <>
      <ModalPortal isOpen={modalOpen}>
        <FormAuthorization />
        <Button
          variant="primary"
          onClick={() => {
            changeModalState(false);
            navigate("/signup");
          }}
        >
          Зарегестрироваться
        </Button>
      </ModalPortal>

      <HeaderProject />
      <Outlet />
      <FooterProject />
    </>
  );
}

export { App };
