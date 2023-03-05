import { HeaderProject } from "./Components/Header/Header";
import { FooterProject } from "./Components/Footer/Footer";
import { FormAuthorization } from "./Components/FormAuthorization/FormAuthorization";
import { changeModalState } from "./Redux/slices/modalSlice";
import "./App.css";
import { ModalPortal } from "./Components/ModalPortal/ModalPortal";
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const modalOpen = useSelector((state) => state.modalOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  const TOKEN = localStorage.getItem("token");

  if (TOKEN) {
    if (location.pathname === "/") {
      return <Navigate to="/main" />;
    }
  }

  return (
    <>
      <ModalPortal isOpen={modalOpen}>
        <FormAuthorization />
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            dispatch(changeModalState(false));
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
