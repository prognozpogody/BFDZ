import { HeaderProject } from "./Components/Header/Header";
import { FooterProject } from "./Components/Footer/Footer";
import { FormAuthorization } from "./Components/FormAuthorization/FormAuthorization";
import { changeModalState } from "./Redux/slices/modalSlice";
import "./App.css";
import { ModalPortal } from "./Components/ModalPortal/ModalPortal";
import { useNavigate, Outlet } from "react-router-dom";
import { Button, Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const modalOpen = useSelector((state) => state.modalOpen);
  const dispatch = useDispatch();

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
      <Layout>
        <HeaderProject />
        <Outlet />
        <FooterProject />
      </Layout>
    </>
  );
}

export { App };
