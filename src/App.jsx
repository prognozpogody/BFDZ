/** @format */

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { useEffect } from "react";
import "./App.css";
import ModalPortal from "./Components/ModalPortal/ModalPortal";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button, Layout } from "antd";
import { UserApi } from "./Api/User";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => UserApi.getInfoUser(),
  });

  const navigate = useNavigate();
  const location = useLocation();
  let modalOpen;
  // Проверка на наличие токена, обновление токена в контексте, вызов модалки
  // авторизации, если нет токена
  // TODO Сделать навигейт с главной страницы если есть токен и он норм
  // useEffect(() => {
  //   const TOKEN = localStorage.getItem("token");
  //   if (TOKEN) {
  //     setIsAuth(true);
  //     setUserToken(TOKEN);
  //     setUser(data);
  //     navigate("Product");
  //   } else if (!isAuth && location.pathname !== "/signup") {
  //     navigate("/");
  //     setModalOpen(true);
  //   }
  // }, [data]);

  return (
    <>
      <ModalPortal isOpen={modalOpen}>
        <FormAuthorization />
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            modalOpen = false;
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
