import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormAuthorization from "./Components/FormAuthorization/FormAuthorization";
import { useContext, useEffect } from "react";
import "./App.css";
import ModalPortal from "./Components/ModalPortal/ModalPortal";
import { UserContext } from "./Context/Context";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";
import { UserApi } from "./Api/User";
import { useQuery } from "@tanstack/react-query";
import { TOKEN } from "./constants/constants";

function App() {
  const {
    onFinishSignIn,
    setIsAuth,
    setUserToken,
    modalOpen,
    setModalOpen,
    isAuth,
    setUser
  } = useContext(UserContext);

  const { data } = useQuery({
    queryKey: ["CurrentUser"],
    queryFn: () => UserApi.getInfoUser(),
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Проверка на наличие токена, обновление токена в контексте, вызов модалки
  // авторизации, если нет токена
  // TODO Сделать навигейт с главной страницы если есть токен и он норм
  useEffect(() => {
    if (TOKEN) {
      setIsAuth(true);
      setUserToken(TOKEN);
      setUser(data);
    } else if (!isAuth && location.pathname !== "/signup") {
      setModalOpen(true);
    }
  }, [
    onFinishSignIn,
    setIsAuth,
    setUserToken,
    modalOpen,
    setModalOpen,
    isAuth,
    setUser,
    location,
    data,
  ]);
  
  // if (isAuth ===true ) {
  //   return <Navigate to="Product" />
  // }

  return (
    <>
      <ModalPortal isOpen={modalOpen}>
        <FormAuthorization onFinish={onFinishSignIn} />
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            setModalOpen(false);
            navigate("signup");
          }}
        >
          Зарегестрироваться
        </Button>
      </ModalPortal>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
