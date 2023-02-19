import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { changeModalState } from "./Redux/slices/modalSlice";
import "./App.css";
import ModalPortal from "./Components/ModalPortal/ModalPortal";
import { useNavigate, Outlet } from "react-router-dom";
import { Button, Layout } from "antd";
import { UserApi } from "./Api/User";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { data } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => UserApi.getInfoUser(),
  });

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
            navigate("signup");
          }}
        >
          Зарегестрироваться
        </Button>
      </ModalPortal>
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
